import React, { useEffect, useState } from "react";
import "./OrderConfirmation.css";
import { BarLoader, BounceLoader, BeatLoader } from "react-spinners";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

export const OrderConfirmation = () => {
  const [orderStatus, setOrderStatus] = useState(false);
  const [transId, setTransId] = useState(Math.random().toString(36).slice(2));
  // console.log("transId:", transId);
  // console.log("orderStatus:", orderStatus);

  useEffect(() => {
    setTimeout(() => {
      setOrderStatus(true);
    }, 5000);
  }, []);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div style={{ marginTop: "15vh", height: "65vh" }}>
        {orderStatus ? (
          <div>
            <img
              src="https://cdn.dribbble.com/users/571236/screenshots/2888472/happystate.gif"
              alt=""
              style={{ width: "25%" }}
            />
            <h4>
              <span style={{ color: "red", fontWeight: 600 }}>Yay!</span> Order
              Placed succesfully
            </h4>
            <p>
              Transaction Id : <span style={{ color: "blue" }}>{transId}</span>
            </p>
            <p>
              Products will deliver in{" "}
              <span style={{ color: "red", fontWeight: 600 }}>3 Days!</span>
            </p>
          </div>
        ) : (
          <div
            style={{
              marginTop: "13%",
            }}
          >
            Payment Processing
            <p>
              <BeatLoader />
              <BeatLoader />
            </p>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
