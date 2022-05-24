import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
import "./Signin.css";
import { useDispatch, useSelector } from "react-redux";
// import { userId } from "../../Redux/Login/action";
import { login } from "../../Redux/Login/action";
import { Link } from "react-router-dom";

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

    alert("Welcome, Signed in");
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        return (
        <div id="sign_in">
          <div id="sign_in_div">
            <div>
              <h3>
                Welcome to{" "}
                <span style={{ color: "red", fontWeight: 600 }}>Shopp.my</span>
              </h3>
              <h2>Sign In</h2>
            </div>
            <div id="sign_in_form">
              <form action="">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  style={{ borderRadius: "20px", paddingLeft: "5%" }}
                  value={userdetails.email}
                  onChange={(e) => handleSave(e)}
                />
                <br />
                <br />
                <input
                  type="text"
                  name="password"
                  placeholder="Enter Password"
                  value={userdetails.password}
                  style={{ borderRadius: "20px", paddingLeft: "5%" }}
                  onChange={(e) => handleSave(e)}
                />
                <br />
              </form>
              <a href="#" className="forgot_Password">
                Forgot your password?
              </a>
              <div>
                <br />
                <Link to={"/"}>
                  <button
                    onClick={handleSubmit}
                    className="button-33"
                    style={{ backgroundColor: "#5fafc4", color: "black" }}
                  >
                    Sign in
                  </button>
                </Link>
                <p className="sign_up_link">
                  New To{" "}
                  <span style={{ color: "red", fontWeight: 600 }}>
                    Shopp.my?{" "}
                  </span>
                  <a href="./Sign_Up.html">Create Your Account</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
