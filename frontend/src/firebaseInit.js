// ********* Import necessary libraries and functions *********
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcndzvNffVZQiAqorT7_l-8ilw8eilFL4",
  authDomain: "networknest-db4ac.firebaseapp.com",
  projectId: "networknest-db4ac",
  storageBucket: "networknest-db4ac.appspot.com",
  messagingSenderId: "1058943897051",
  appId: "1:1058943897051:web:77f5f8da2de44205b32bfe"
};

// ********* Initialize Firebase *********
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);