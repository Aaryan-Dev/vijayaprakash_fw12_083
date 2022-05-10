import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { ShowProducts } from "./Components/ShowProducts/ShowProducts";
import { Signup } from "./Components/SignUp/Signup";
import { SignIn } from "./Components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
