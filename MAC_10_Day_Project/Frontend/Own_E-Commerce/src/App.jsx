import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Signup } from "./Components/SignUp/Signup";
import { SignIn } from "./Components/SignIn/SignIn";
import { ProductDetails } from "./Components/ProductDetails/ProductDetails";
import { Cart } from "./Components/Cart/Cart";
import { Checkout } from "./Components/Checkout/Checkout";
import { Payment } from "./Components/Payment/Payment";
import { OrderConfirmation } from "./Components/OrderConfirmation/OrderConfirmation";
import { Home } from "./Components/Home/Home";
import { Favourites } from "./Components/Favourites/Favourites";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route
          path="/selected_product_details/:id"
          element={<ProductDetails />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orderConfirmation" element={<OrderConfirmation />} />
      </Routes>
    </div>
  );
}

export default App;
