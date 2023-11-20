import styles from "../../styles/home.module.css";

import { addToCartThunk } from "../../Redux/Reducers/productReducer";
import { useDispatch } from "react-redux";

export default function ItemCard(props) {

  const dispatch = useDispatch();

  const { id, first_name, last_name, email, category, avatar, gender, domain, available } = props.item;

  return (
    <>
      {/* Card Container */}
      <div className={styles.cardContainer}>

      {/* Image Container */}
      <div className={styles.imageContainer}>
        <img src={avatar} alt={category} />
      </div>


      {/* Product Description */}
      <div className={styles.itemInfo}>
        <div className={styles.namePrice}>
          {/* Product Name */}
          <div className={styles.name}><u>Full Name:</u> <div> {first_name} {last_name} </div> </div>

          <div className={styles.domain}><u>Domain</u>: {domain} </div>

          {/* Product Price */}
          <div className={styles.price}>{available === true ? (<span className={styles.available}>Available</span>) : (<span className={styles.unavailable}>Unavailable</span>)}</div>
        </div>

        {/* Add to Cart Button */}
        <div className={styles.btnContainer}>
          <button
            className={styles.addBtn}
            onClick={() => dispatch(addToCartThunk(props.item))}
          >
            <span className="text">
              Add to Cart
            </span>
          </button>
        </div>
      </div>
      </div>
    </>
  );
}


