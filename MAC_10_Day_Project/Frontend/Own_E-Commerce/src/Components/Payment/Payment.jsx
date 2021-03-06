import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
import "./Payment.css";

export const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    secureCode: "",
  });
  const [totalPayable, setTotalPayable] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };
  // console.log("paymentDetails:", paymentDetails);

  const handleClearCart = () => {
    fetch(`http://localhost:8081/register/purchased/6283c78c7e03a6517f8866a5`, {
      method: "PATCH",
      body: JSON.stringify([]),
      headers: { "Content-Type": "Application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="entire_container">
        <div>
          <Link to={"/"}>
            <img
              src="https://i.pinimg.com/600x315/1e/29/77/1e2977ca1225981e307ad8d2c26a9040.jpg"
              alt=""
              className="logo_img"
            />
          </Link>
        </div>
        <hr />
        <div>
          <h4
            style={{
              // border: "1px solid red",
              height: "4vh",
              backgroundColor: "#b3d0d4",
            }}
          >
            ORDER DETAILS
          </h4>
          <hr className="line" />
          <div id="bill_details">
            <div className="bill_id">
              <p>Billing Description</p>
              <p>Order NO.</p>
              <p>Order Amount</p>
            </div>
            <div className="bill_id bill_id1">
              <p>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "red",
                  }}
                >
                  Shopp.my
                </span>
                online Miscellaneous/Location UK
              </p>
              <p>AA22B21P5909-7AR4Q6</p>
              <p id="price">{totalPayable}</p>
            </div>
          </div>
        </div>
        <div>
          <h4
            style={{
              // border: "1px solid red",
              height: "4vh",
              backgroundColor: "#b3d0d4",
            }}
          >
            PAYMENT DETAILS
          </h4>
          <hr className="line" />
          <div id="enter_card">
            <div id="img">
              <img
                src="https://riverpalm.com/wp-content/uploads/2017/06/Credit-Card-Visa-And-Master-Card-Transparent-PNG-768x179.png"
                alt=""
              />
            </div>
            <div>
              <form action="" id="card_num">
                <input
                  type="text"
                  placeholder="Card Number"
                  maxlength="16"
                  minlength="16"
                  name="cardNumber"
                  value={paymentDetails.cardNumber}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </form>
              <form action="" id="expiry">
                <input
                  type="text"
                  placeholder="Expiration Date MM/YY"
                  maxlength="5"
                  minlength="4"
                  name="expiry"
                  value={paymentDetails.expiry}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <input
                  type="password"
                  id="code"
                  placeholder="Secure Code"
                  maxlength="3"
                  minlength="3"
                  name="secureCode"
                  value={paymentDetails.secureCode}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </form>

              <Link to={"/orderConfirmation"}>
                <button id="pay" onClick={handleClearCart}>
                  PAY NOW
                </button>
              </Link>
              <button id="cancel">CANCEL</button>
            </div>
          </div>
          <div id="img_png">
            <img src="https://i.ibb.co/h11R0dj/Screenshot-93.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
