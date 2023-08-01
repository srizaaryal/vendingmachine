import "./styles.css";
import { Link } from "react-router-dom";

function Chips() {
  return (
    <div className="chips">
      <h2>Yummy Chips!</h2>
      <img
        className="chips-img"
        src="https://plus.unsplash.com/premium_photo-1676649644131-fd7296a736f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      />
      <p>
        <Link to="/">Go back to the Vending Machine</Link>
      </p>
    </div>
  );
}

export default Chips;
