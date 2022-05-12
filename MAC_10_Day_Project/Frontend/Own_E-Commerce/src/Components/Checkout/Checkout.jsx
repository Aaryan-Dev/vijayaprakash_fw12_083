import React, { useState } from "react";
import "./Checkout.css";
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const [address, setAddress] = useState({
    Name: "",
    Mobile: "",
    Pincode: "",
    Locality: "",
    Full_address: "",
    City: "",
    State: "",
    Landmark: "",
    Alternate_Number: "",
  });
  const [displayAddress, setDisplayAddress] = useState("");

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  // console.log("address:", address);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayAddress(
      address.Full_address +
        ", " +
        address.City +
        ", " +
        address.State +
        " - " +
        address.Pincode +
        " Phone Number: " +
        address.Mobile +
        ".",
    );
  };

  return (
    <div>
      <NavBar />
      <div className="address_form">
        <h2 className="fill_form">Please fill the Delivery Address</h2>
        <form action="">
          <div className="address_first_box">
            <input
              type="text"
              placeholder="Name*"
              value={address.Name}
              name="Name"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="10-Digit Mobile Number*"
              value={address.Mobile}
              name="Mobile"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Pincode*"
              value={address.Pincode}
              name="Pincode"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Locality*"
              value={address.Locality}
              name="Locality"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="address_second_box">
            <input
              type="text"
              placeholder="Address (Area and Street)*"
              value={address.Full_address}
              name="Full_address"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="address_third_box">
            <input
              type="text"
              placeholder="City*"
              value={address.City}
              name="City"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="State*"
              value={address.State}
              name="State"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Landmark (Optional)"
              value={address.Landmark}
              name="Landmark"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Alternate Number"
              value={address.Alternate_Number}
              name="Alternate_Number"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button
            className="button-18"
            role="button"
            style={{ marginTop: "2%" }}
            onClick={handleSubmit}
          >
            Save
          </button>
        </form>
      </div>
      <h3
        style={{
          width: "51%",
          // border: "1px solid red",
          margin: "auto",
          marginTop: "1%",
          textAlign: "left",
        }}
      >
        Product(s) will deliver here :
      </h3>
      <div className="show_address">
        <div className="show_address_textarea">
          <p>{displayAddress}</p>
        </div>
        {/* <button className="proceed_to_payment">Proceed to Payment</button> */}
        <Link to={"/payment"} style={{ textDecoration: "none" }}>
          <button className="button-21" role="button">
            Proceed to Payment
          </button>
        </Link>
      </div>
    </div>
  );
};
