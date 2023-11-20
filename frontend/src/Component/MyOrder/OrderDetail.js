import styles from "../../styles/myorder.module.css";

export default function OrderDetail(props) {
  // order details from props
  const { date, list } = props.order;

  return (
    // Order Container
    <div className="">
      {/* Order Date */}
      <h1>Team created On: {date}</h1>

      {/* Table of Order Details */}
      <table>

        {/* First Row */}
        <tr>
          <th>S.no</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Domain</th>
          <th>Availability</th>
        </tr>

        {list.map((product, i) => (
          <tr>
            <td>{i + 1}</td>
            <td>{product.first_name} {product.last_name}</td>
            <td>{product.email}</td>
            <td>{product.gender}</td>
            <td>{product.domain}</td>
            <td>{product.available ? ("Available") : ("Unavailable")}</td>
          </tr>
        ))}

        {/* Last Row */}
        <tr>
          <td colSpan={6}>Final Team!!!</td>
        </tr>
      </table>
    </div>
  );
}
