import oldStyles from "../../styles/home.module.css";
import styles from "../../styles/cart.module.css";

import { removeFromCartThunk } from "../../Redux/Reducers/productReducer";
import { useDispatch } from "react-redux";

export default function CartItem(props) {

  const dispatch = useDispatch();

  const { id, first_name, last_name, email, gender, avatar, domain, available } = props.product;

  return (
    <>
      {/* Item Container */}
      <div className={styles.cardContainer}>
        {/* Image container */}
        <div className={styles.imageContainer}>
          {/* Product Image */}
          <img src={avatar} alt={first_name + last_name} />
        </div>

        {/* Product Description */}
        <div className={styles.itemInfo}>
          {/* User Name */}
          <div className={styles.namePrice}>{first_name} {last_name}</div>

          {/* Domain */}
          <div className={styles.quantity}><u>Domain</u>: {domain}</div>

          {/* Gender */}
          <div className={styles.quantity}><u>Gender</u>: {gender}</div>

          {/* Availability */}
          <div className={styles.price}>{available ? (<span className={styles.available}>Available</span>) : (<span className={styles.unavailable}>Unavailable</span>)}</div>

          {/* Remove Button  */}
          <div className={styles.btnContainer}>
            <button
              className={styles.removeBtn}
              onClick={() => dispatch(removeFromCartThunk(props.product))}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
