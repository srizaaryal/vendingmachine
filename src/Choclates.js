import "./styles.css";
import { Link } from "react-router-dom";

function Choclates() {
  return (
    <div className="choclates">
      <h2>So Refreshing!</h2>
      <img
        className="choclates-img"
        src="https://media.istockphoto.com/id/184926145/photo/chewy-granola-bars.jpg?s=612x612&w=is&k=20&c=dCjxKElcJoZ6EJywi8KkgDh3NHGO8K-gQmIHYbSVE7g="
      />
      <p>
        <Link to="/">Go back to the Vending Machine</Link>{" "}
      </p>
    </div>
  );
}

export default Choclates;
