import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h3>What do you want?</h3>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/Chips"> Chips</Link>
        <Link to="/Waffle"> Waffle</Link>
        <Link to="/Choclates"> Choclates</Link>
      </nav>
    </div>
  );
}
