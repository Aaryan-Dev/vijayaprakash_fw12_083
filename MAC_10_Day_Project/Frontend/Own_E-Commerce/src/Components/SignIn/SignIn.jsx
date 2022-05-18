import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
import "./Signin.css";
import { useDispatch, useSelector } from "react-redux";
import { userId } from "../../Redux/Login/action";
import { Navigate } from "react-router-dom";

export const SignIn = () => {
  const [userdetails, setUserdetails] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSave = (e) => {
    setUserdetails({ ...userdetails, [e.target.name]: e.target.value });
  };
  // console.log(userdetails);

  const handleSubmit = () => {
    fetch(`http://localhost:8081/login`, {
      method: "POST",
      body: JSON.stringify(userdetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res._id", res._id);
        // dispatch(userId({ userid: res._id }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        return (
        <div className="signup-cont">
          <div>
            <h3>Welcome to Shopify</h3>
            <br />
            <br />
            <p>Enter Mail Id</p>
            <input
              type="email"
              name="email"
              value={userdetails.email}
              onChange={(e) => handleSave(e)}
            />
            <br />
            <br />
            <p>Enter Password</p>
            <input
              type="text"
              name="password"
              value={userdetails.password}
              onChange={(e) => handleSave(e)}
            />
            <br />
            <br />
            <br />
            <button onClick={handleSubmit}>Sign in</button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
