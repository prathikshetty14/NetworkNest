// MainContent.js
import styles from "../../styles/home.module.css";
import ItemCard from "./ItemCard";

export default function MainContent(props) {
  const { data, search, price, category, applyFilter, currentPage, itemsPerPage } = props;

  const calculateStartIndex = (currentPage, itemsPerPage) => (currentPage - 1) * itemsPerPage;
  const calculateEndIndex = (startIndex, itemsPerPage) => startIndex + itemsPerPage;

  const startIndex = calculateStartIndex(currentPage, itemsPerPage);
  const endIndex = calculateEndIndex(startIndex, itemsPerPage);

  const paginatedItems = data
    .filter((item) => {
      return search.toLowerCase() === "" ? item : 
      item.domain.toLowerCase().includes(search) ||
      item.first_name.toLowerCase().includes(search) ||
      item.first_name.toLowerCase().includes(search);
    })
    .filter((item) => {
      return !applyFilter || category === "none" ? item : 
      item.gender === category ||
      item.domain === category ||
      item.available === category;
    })
    .slice(startIndex, endIndex);

  console.log("Filtered Items Main:", paginatedItems);
  console.log("category", category) 



  return (
    <div className={styles.itemContainer}>
      {/* Filter Button for the Search Bar */}
      {paginatedItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
