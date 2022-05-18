import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
import "./Signin.css";
import { useDispatch, useSelector } from "react-redux";
// import { userId } from "../../Redux/Login/action";
import { login } from "../../Redux/Login/action";

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
    dispatch(login(userdetails));
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
