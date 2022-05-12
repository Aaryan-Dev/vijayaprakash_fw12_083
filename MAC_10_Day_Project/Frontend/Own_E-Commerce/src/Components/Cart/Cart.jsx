import React, { useEffect, useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import "./Cart.css";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [data, setData] = useState([]);
  const [qty, setQty] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  const cartdisplay = () => {
    fetch(`http://localhost:8080/cartItems`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        // console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    cartdisplay();
  }, []);

  //-------------------------------------------------

  // To find the Total Items in Cart
  let itemslength;
  itemslength = data.length;
  // ***Finished*** To find the ***Total Items*** in Cart
  //--------------------------------------------------

  // To find the ***Total Price*** of the cart items
  let total;
  if (data.length > 0) {
    let sum = 0;
    data.forEach((e) => {
      sum += e.price;
    });
    total = sum.toFixed(2);
  }
  // ***Finished*** To find the ***Total Price*** of the cart items
  //--------------------------------------

  const handleQuantity = (value) => {
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
                  <p className="cart-item-title" title={e.title}>
                    {e.title}
                  </p>
                  <p className="cart-item-category"> In {e.category} Section</p>
                  <p className="stocks_left">Hurry! Only Few Stocks Left!</p>
                  <p className="cart-item-des">{e.description}</p>

                  <p className="cart-item-rating">
                    {e.rating}
                    <span className="rating_text">
                      <StarIcon
                        style={{
                          paddingBottom: "0px",
                          fontSize: "14px",
                          marginLeft: "2px",
                        }}
                      />
                    </span>
                  </p>
                  <p className="display_quantity">Quantity : {qty}</p>
                  <div className="Quanity-btn">
                    <div className="qty_btn">
                      <button
                        className="button-84"
                        style={{ width: "10px" }}
                        onClick={() => {
                          handleQuantity(1);
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
            <Link to={"/checkout"}>
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
