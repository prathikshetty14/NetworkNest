import styles from "../../styles/home.module.css";

export default function FilterBar(props) {
  const { price, setPrice, setCategory } = props;

  return (
    // Main Container
    <div className={styles.filterBar}>
      
      <div className={styles.categoryBox}>
        <span>Domain:</span>

        {/* Different Domains */}
        <div>

          <input
            type="radio"
            id="men"
            value="Sales"
            name="category"
            onClick={() => setCategory("Sales")}
          />
          <label for="Sales">Sales</label>


          <input
            type="radio"
            id="women"
            value="Finance"
            name="category"
            onClick={() => setCategory("Finance")}
          />
          <label for="Finance">Finance</label>

          <input
            type="radio"
            id="women"
            value="IT"
            name="category"
            onClick={() => setCategory("IT")}
          />
          <label for="IT">IT</label>

          <input
            type="radio"
            id="women"
            value="Management"
            name="category"
            onClick={() => setCategory("Management")}
          />
          <label for="Management">Management</label>

          <input
            type="radio"
            id="women"
            value="UI Designing"
            name="category"
            onClick={() => setCategory("UI Designing")}
          />
          <label for="UI Designing">UI Designing</label>

          <br />


          <input
            type="radio"
            id="women"
            value="Marketing"
            name="category"
            onClick={() => setCategory("Marketing")}
          />
          <label for="Marketing">Marketing</label>


          <input
            type="radio"
            id="women"
            value="IT"
            name="category"
            onClick={() => setCategory("IT")}
          />
          <label for="IT">IT</label>


          <input
            type="radio"
            id="women"
            value="Business Development"
            name="category"
            onClick={() => setCategory("Business Development")}
          />
          <label for="Business Development">Business Development</label>

          {/* none  */}
          <input
            type="radio"
            id="none"
            value="none"
            name="category"
            onClick={() => setCategory("none")}
          />
          <label for="book">None</label>
        </div>
      </div>


      {/* Sort Item by Category */}
      <div className={styles.categoryBox}>
        <span>Gender:</span>

        {/* Different Genders */}
        <div>
          {/* Mens category */}
          <input
            type="radio"
            id="men"
            value="Male"
            name="category"
            onClick={() => setCategory("Male")}
          />
          <label for="Male">Male</label>

          {/* Womens category */}
          <input
            type="radio"
            id="women"
            value="Female"
            name="category"
            onClick={() => setCategory("Female")}
          />
          <label for="Female">Female</label>

          {/* Agender Category */}
          <input
            type="radio"
            id="women"
            value="Agender"
            name="category"
            onClick={() => setCategory("Agender")}
          />
          <label for="Agender">Agender</label>

          {/* Bigender Category */}
          <input
            type="radio"
            id="women"
            value="Bigender"
            name="category"
            onClick={() => setCategory("Bigender")}
          />
          <label for="Bigender">Bigender</label>

          {/* Polygender Category */}
          <input
            type="radio"
            id="women"
            value="Polygender"
            name="category"
            onClick={() => setCategory("Polygender")}
          />
          <label for="Polygender">Polygender</label>

          <br/>

          {/* Non-binary Gender */}
          <input
            type="radio"
            id="women"
            value="Non-binary"
            name="category"
            onClick={() => setCategory("Non-binary")}
          />
          <label for="Non-binary">Non-binary</label>

          {/* Genderfluid Category */}
          <input
            type="radio"
            id="women"
            value="Genderfluid"
            name="category"
            onClick={() => setCategory("Genderfluid")}
          />
          <label for="Genderfluid">Genderfluid</label>

          {/* Genderqueer Category */}
          <input
            type="radio"
            id="women"
            value="Genderqueer"
            name="category"
            onClick={() => setCategory("Genderqueer")}
          />
          <label for="Genderqueer">Genderqueer</label>

          {/* none  */}
          <input
            type="radio"
            id="none"
            value="none"
            name="category"
            onClick={() => setCategory("none")}
          />
          <label for="book">None</label>
        </div>
      </div>

      <div className={styles.categoryBox}>
        <span>Availability:</span>

        {/* Different Availability */}
        <div>
        <input
            type="radio"
            id="women"
            value="Available"
            name="category"
            onClick={() => setCategory(true)}
          />
          <label for="Available">Available</label>

          <input
            type="radio"
            id="women"
            value="Unavailable"
            name="category"
            onClick={() => setCategory(false)}
          />
          <label for="Unavailable">Unavailable</label>

          <br/>
          {/* none  */}
          <input
            type="radio"
            id="none"
            value="none"
            name="category"
            onClick={() => setCategory("none")}
          />
          <label for="book">None</label>
        </div>
      </div>
    </div>
  );
}
