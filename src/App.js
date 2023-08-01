// import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Vending from "./vending";
import Choclates from "./Choclates";
import Chips from "./Chips";
import Waffle from "./Waffle";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Vending />} />
          <Route path="/Choclates" element={<Choclates />} />
          <Route path="/Chips" element={<Chips />} />
          <Route path="/Waffle" element={<Waffle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
