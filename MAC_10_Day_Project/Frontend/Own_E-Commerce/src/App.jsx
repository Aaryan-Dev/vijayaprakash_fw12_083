import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { ShowProducts } from "./Components/ShowProducts/ShowProducts";
import { Signup } from "./Components/SignUp/Signup";
import { SignIn } from "./Components/SignIn/SignIn";
import { ProductDetails } from "./Components/ProductDetails/ProductDetails";
import { Cart } from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/selected_product_details/:id"
          element={<ProductDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
