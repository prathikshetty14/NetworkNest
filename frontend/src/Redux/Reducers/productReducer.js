// ********* Import necessary libraries and functions *********

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateDoc, doc, arrayUnion, onSnapshot, arrayRemove } from "firebase/firestore";
import { db } from "../../firebaseInit";

import { toast } from "react-toastify";

// Function to get the current date
function getDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if(day<10) {
      return `${year}-${month}-${0}${day}`;
    }
    if(month<10) {
      return `${year}-${0}${month}-${day}`;
    }
    return `${year}-${month}-${day}`;
}

// Define the initial state of the product slice
const initialState = {
    cart:[],
    itemInCart:0,
    myorders:[],
    total: 0,
}

// Create an async thunk to fetch the initial cart orders from the database
export const getInitialCartOrdersThunk = createAsyncThunk(
    "product/getCartOrders",
    (args, thunkAPI) => {
        const {authReducer, productReducer} = thunkAPI.getState();
        const {userLoggedIn, isLoggedIn} = authReducer;


        if(isLoggedIn){

            onSnapshot(doc(db, "networknest", userLoggedIn.id), (doc) => {

                thunkAPI.dispatch(setCart(doc.data().cart));
                thunkAPI.dispatch(setMyOrders(doc.data().orders));
            });

            return productReducer.cart;
        }

    }
)

// Create an async thunk to fetch the initial user orders from the database
export const getInitialMyOrdersThunk = createAsyncThunk(
    "product/getMyOrders",
    (args, thunkAPI) => {
        const {authReducer, productReducer} = thunkAPI.getState();
        const {userLoggedIn, isLoggedIn} = authReducer;

        if(isLoggedIn){
            onSnapshot(doc(db, "networknest", userLoggedIn.id), (doc) => {
                thunkAPI.dispatch(setMyOrders(doc.data().orders));
            });
            return productReducer.myorders;
        }
    }
)

// Create an async thunk to update the user's cart in the database
export const updateCartInDatabase = createAsyncThunk(
    "product/updateCartInDatabase",
    async(args, thunkAPI) => {

        const {authReducer, productReducer} = thunkAPI.getState();
        const { userLoggedIn } = authReducer;

        const userRef = doc(db, "networknest", userLoggedIn.id);
        await updateDoc(userRef, {
            cart: productReducer.cart
        });
    }
)



// Create an async thunk to add a product to the cart
export const addToCartThunk = createAsyncThunk(
    "product/addToCart",
    async (product,thunkAPI) => {

        const { authReducer,productReducer } = thunkAPI.getState();
        const {isLoggedIn,userLoggedIn} = authReducer;
        
        if(!isLoggedIn){
            return window.location.href = "/signin";
        }

        const index=productReducer.cart.findIndex((item) => item.name === product.name);

        if (index !== -1) {
            toast.error("Already selected!");
            return;
        }

        const userRef = doc(db, "networknest", userLoggedIn.id);
        await updateDoc(userRef, {
            cart: arrayUnion({...product})
        });
        
        toast.success("Teammate selected!");

        thunkAPI.dispatch(increaseTotalAmount(product.price));
        thunkAPI.dispatch(increaseTotalItem());
    }
);

// Create an async thunk to remove a product from the cart
export const removeFromCartThunk = createAsyncThunk(
    "product/removeFromCart",
    async(product,thunkAPI) => {

        const { authReducer } = thunkAPI.getState();
        const {userLoggedIn} = authReducer;
        
        const userRef = doc(db, "networknest", userLoggedIn.id);
        await updateDoc(userRef, {
            cart: arrayRemove(product)
        });

        toast.success("Teammate removed!");
        return product;
    }
);

// Create an async thunk to clear the user's cart
export const clearCartThunk = createAsyncThunk(
    "product/emptyCart",
    async (args,thunkAPI) => {

        const { authReducer, productReducer } = thunkAPI.getState();
        const { userLoggedIn } = authReducer;

        

        if(productReducer.itemInCart.length === 0){
            toast.error("No one selected!");   
            return;
        }

        if (!userLoggedIn){
            toast.error("User not logged in. Please log in first.");
            return false;
        }
        const userRef = doc(db, "networknest", userLoggedIn.id);
        await updateDoc(userRef, {
            cart: [],
        });
        toast.success("No one selected");
        return true;
    }
);

// Create an async thunk to complete a purchase and update the user's order history  
export const purchaseAllThunk = createAsyncThunk(
    "product/purchaseAllItems",
    async (args,thunkAPI) => {

        const { authReducer,productReducer} = thunkAPI.getState();
        const {userLoggedIn} = authReducer;
        
        const currentDate=getDate();
        
        const userRef = doc(db, "networknest", userLoggedIn.id);
        await updateDoc(userRef, {
            orders: arrayUnion({date:currentDate,
                                list:productReducer.cart,})
            }
        );
        
        thunkAPI.dispatch(clearCartThunk());
    }
);


// Create a productSlice using createSlice
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setMyOrders: (state,action) => {
            state.myorders = action.payload;
            return;
        },
        setCart: (state,action) => {
            state.cart = action.payload;
            return;
        },
        increaseTotalItem: (state,action) => {
            state.total += action.payload;
            return;
        },
        increaseTotalAmount: (state,action) => {
            state.total += action.payload;
            return;
        },
        reduceTotalAmount: (state,action) => {
            state.total -= action.payload;
            return;
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getInitialCartOrdersThunk.fulfilled, (state,action) => {
            const cart = action.payload;
        })
        
        .addCase(getInitialMyOrdersThunk.fulfilled, (state, action) => {
            state.myorders = action.payload;
        })


        .addCase(removeFromCartThunk.fulfilled, (state,action) => {
            const product = action.payload;

        })

        .addCase(clearCartThunk.fulfilled, (state,action) => {
            state.itemInCart = 0;
            state.total = 0;
            state.cart=[];
        })
    }
})


// Export the productReducer and action creators
export const productReducer = productSlice.reducer;

export const {
    setMyOrders,
    setCart,
    increaseTotalAmount,
    increaseTotalItem,
    reduceTotalAmount } = productSlice.actions;

export const productSelector = (state) => state.productReducer;