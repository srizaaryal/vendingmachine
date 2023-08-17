import "./styles.css";
import NavBar from "./navBar";

export default function Vending() {
  return (
    <div className="vending">
      <h1> Vending Machine </h1>
      <h2> Grab and Go! </h2>
      <img
        className="vending-img"
        src="https://images.unsplash.com/photo-1585341840941-98553e474d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVuZGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      />
      <NavBar />
    </div>
  );
}
