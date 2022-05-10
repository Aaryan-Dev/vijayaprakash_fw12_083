import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { ShowProducts } from "./Components/ShowProducts/ShowProducts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowProducts />} />
      </Routes>
    </div>
  );
}

export default App;
