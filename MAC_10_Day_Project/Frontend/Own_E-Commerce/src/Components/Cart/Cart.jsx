import React, { useEffect, useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import "./Cart.css";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [data, setData] = useState([]);
  const [qty, setQty] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  //   const data = [
  //     {
  //       category: "men's clothing",
  //       description:
  //         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //       id: 1,
  //       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //       price: 109.95,
  //       rating: 3.9,
  //       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     },
  //     {
  //       category: "men's clothing",
  //       description:
  //         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //       id: 1,
  //       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //       price: 109.95,
  //       rating: 3.9,
  //       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     },
  //   ];

  const cartdisplay = () => {
    fetch(`http://localhost:8080/cartItems`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    cartdisplay();
  }, []);

  let itemslength;
  itemslength = data.length;
  let total;

  if (data.length > 0) {
    let sum = data.reduce((a, b) => a.price + b.price);
    total = sum.toFixed(2);
  }

  const handleQuantity = (value, { price }) => {
    console.log("price", price);
    if (qty > 0) {
      setQty(qty + value);
    }
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="cart-container">
        <div className="cart-items">
          <div className="heading">
            <h3>Cart Items</h3>
            <h3>Price</h3>
          </div>
          <div>
            {data.map((e) => (
              <div key={e.title} className="each-cart-Item">
                <div>
                  <img src={e.image} alt={e.title} />
                </div>
                <div className="cart-item-details">
                  <p className="cart-item-title">{e.title}</p>
                  <p className="cart-item-category"> In {e.category} Section</p>
                  <p className="stocks_left">Hurry! Only Few Stocks Left!</p>
                  <p className="cart-item-des">{e.description}</p>

                  <p className="cart-item-rating">
                    {e.rating}
                    <span className="rating_text">
                      <StarPurple500Icon />
                    </span>
                  </p>
                  <p className="display_quantity">Quantity : {qty}</p>
                  <div className="Quanity-btn">
                    <div className="qty_btn">
                      <button
                        className="button-84"
                        style={{ width: "10px" }}
                        onClick={() => {
                          handleQuantity(1, { price });
                        }}
                      >
                        +
                      </button>{" "}
                      <span>Qty</span>{" "}
                      <button
                        className="button-84"
                        onClick={() => {
                          handleQuantity(-1);
                        }}
                      >
                        -
                      </button>
                    </div>
                    <div className="del_btn">
                      <button>Remove Item</button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="cart-item-price">
                    {" "}
                    <span style={{ fontWeight: "500" }}> $ </span>
                    {e.price}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <hr style={{ marginTop: ".130%", color: "black" }} />
          <div className="subtotal">
            <h3>
              Subtotal ({itemslength} Items)
              <span style={{ fontWeight: "500" }}> $ : {total}</span>
            </h3>
          </div>
        </div>
        <div className="cart-total">
          <div>
            <p className="welcome">
              Welcome! Your first order is eligible for{" "}
              <span style={{ color: "green", fontWeight: "500" }}>
                ***Free Delivery***
              </span>{" "}
            </p>
          </div>
          <div className="final_total">
            <h3>
              Subtotal ({itemslength} Items)
              <span style={{ fontWeight: "500" }}> $ : {total}</span>
            </h3>
            {/* <button className="buy_button">Proceed to Buy</button> */}
            <Link to={""}>
              <button className="button-37" role="button">
                Proceed to Buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
