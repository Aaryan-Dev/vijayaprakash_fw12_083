import React, { useEffect, useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import "./Cart.css";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [data, setData] = useState([]);
  // console.log("data:", data);
  const [qty, setQty] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  // console.log("subtotalstart:", subtotal);

  let LoggedUserId = localStorage.getItem("UserID");
  // console.log("LoggedUserId:", LoggedUserId);

  const cartdisplay = () => {
    fetch(`http://localhost:8081/register/6283c78c7e03a6517f8866a5`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.cartItems);
        setData(res.cartItems);
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
  //-------------------------------------------------
  let total;
  let sum = 0;
  data.forEach((e) => {
    sum += e.quantity * e.price;
  });
  total = sum.toFixed(2);
  // setSubtotal(total);

  //-------------------------------------------------
  // To find the ***Total Price*** of the cart items

  const handleSum = () => {
    let sum = 0;
    data.forEach((e) => {
      sum += e.quantity * e.price;
    });
    total = sum.toFixed(2);
    console.log("total:", total);
    setSubtotal(total);
    console.log("subtotal:", subtotal);
  };
  // handleSum();
  // ***Finished*** To find the ***Total Price*** of the cart items
  //-------------------------------------------------

  // if (value == "add") data[0].quantity += 1;
  //     else data[0].quantity -= 1;

  const handleQuantity = (value, item_id) => {
    // console.log("e:", item_id);
    let temp;
    temp = data.filter((e, i) => {
      // console.log(e._id, i);
      if (item_id == e._id) {
        // console.log("e == e._id:", item_id == e._id);
        if (value == "add") setQty((e.quantity += 1));
        else if (value == "sub") setQty((e.quantity -= 1));
      }
    });
    handleSum();
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
                  <p className="display_quantity">Quantity : {e.quantity}</p>
                  <div className="Quanity-btn">
                    <div className="qty_btn">
                      <button
                        className="button-84"
                        style={{ width: "10px" }}
                        onClick={() => {
                          handleQuantity("add", e._id);
                        }}
                      >
                        +
                      </button>{" "}
                      <span>Qty</span>{" "}
                      <button
                        className="button-84"
                        onClick={() => {
                          handleQuantity("sub", e._id);
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
                    {e.quantity * e.price}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <hr style={{ marginTop: ".130%", color: "black" }} />
          <div className="subtotal">
            <h3>
              Subtotal ({itemslength} Items)
              <span style={{ fontWeight: "500" }}>
                {" "}
                $ : {total > subtotal ? total : subtotal}
              </span>
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
              <span style={{ fontWeight: "500" }}>
                {" "}
                $ : {total > subtotal ? total : subtotal}
              </span>
            </h3>
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
