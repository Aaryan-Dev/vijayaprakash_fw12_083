import React, { useEffect, useState } from "react";
import "./OrderConfirmation.css";
import { BarLoader, BounceLoader, BeatLoader } from "react-spinners";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

export const OrderConfirmation = () => {
  const [orderStatus, setOrderStatus] = useState(false);
  console.log("orderStatus:", orderStatus);

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
      <div
        style={{ marginTop: "15vh", border: "1px solid red", height: "50vh" }}
      >
        {orderStatus ? (
          <p>1234</p>
        ) : (
          <div>
            <BeatLoader />
            <BeatLoader />
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
