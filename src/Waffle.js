import { Link } from "react-router-dom";
import "./styles.css";

function Waffle() {
  return (
    <div className="waffles">
      <h2>Yummy Waffles!!</h2>
      <img
        className="waffles-img"
        src="https://images.unsplash.com/photo-1558584724-0e4d32ca55a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
      />
      <p>
        <Link to="/">Go back to the Vending Machine</Link>{" "}
      </p>
    </div>
  );
}

export default Waffle;
