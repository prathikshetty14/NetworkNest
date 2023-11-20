import styles from "../../styles/navbar.module.css";
import { Outlet, NavLink } from "react-router-dom";
import LogoImage from "../../Assets/ecommerce.png"
import { authSelector, deleteSessionThunk } from "../../Redux/Reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";

// Navbar component
export default function Navbar() {

  const dispatch = useDispatch();

  // Access the authentication context
  const { isLoggedIn, userLoggedIn } = useSelector(authSelector);

  return (
    <>
      {/* Navbar Container */}
      <div className={styles.navbarContainer}>

      {/* Welcome Message */}
      <div className={styles.welcomeMsg}>
        {isLoggedIn && (
              <span>
                {/* <i class="fa-regular fa-hand"></i> */}
                <span class="material-symbols-outlined">waving_hand</span> &nbsp;
                Welcome, {userLoggedIn.name} 
              </span>
          )}
      </div>

        {/* Logo and Title */}
        <div className={styles.appName}>
          <NavLink to="/">
            <img src={LogoImage} alt="logo" />
            <div>NetworkNest</div>
          </NavLink>
        </div>

        {/* Navbar controls */}
        <div className={styles.navLinks}>

          {isLoggedIn && (
            <NavLink to="/myorder">
              <span>
                <i class="fa-regular fa-heart"></i>
                &nbsp;Final Team!
                
              </span>
            </NavLink>
          )}

          {isLoggedIn && (
            <NavLink to="/cart">
              <span>
                <i class="fa-solid fa-list"></i>
                &nbsp;Selected 
                
              </span>
            </NavLink>
          )}


          <NavLink to={!isLoggedIn ? "/signin" : "/"}>
            <span>
              {!isLoggedIn ? (
                <>
                <i className="fa-solid fa-right-to-bracket"></i>&nbsp;
                  SignIn 
                   
                </>
              ) : (
                <>
                <i className="fa-solid fa-right-from-bracket"></i>&nbsp;
                  <span onClick={() => dispatch(deleteSessionThunk())}>LogOut</span> 
                   
                </>
              )}
            </span>
          </NavLink>
        </div>
      </div>

      <Outlet />
    </>
  );
}
