import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
import "./Signup.css";

export const Signup = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  // console.log("credential:", credential);

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fetch(`http://localhost:8081/register`, {
      method: "POST",
      body: JSON.stringify(credential),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    alert("Succesfully Signed Up");
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div id="sign_up">
        <div id="create_account">
          <h3>Please enter the required details to create an Account</h3>
          <form action="">
            <input
              type="email"
              placeholder="Email address"
              id="signup_email"
              name="email"
              value={credential.email}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="6-20 characters (letters or numbers only)"
              id="signup_password"
              name="password"
              value={credential.password}
              onChange={handleChange}
            />
            <br />
            <br />
            {/* <input type="password" placeholder="Enter password again" />
            <br />
            <br /> */}
          </form>
          <div className="agree">
            <input type="checkbox" />
            <p className="common_text">
              I agree to the <span style={{ color: "red" }}>Shopp.my</span>{" "}
              <a href="#">Terms & Conditions</a> <a href="#">Privacy Policy.</a>
            </p>
          </div>
          <div>
            <Link to={"/signin"}>
              <button id="create_button" onClick={handleSubmit}>
                Create My Account
              </button>
            </Link>
            <p className="common_text grey">
              Register at <span style={{ color: "red" }}>Shopp.my</span> and
              receive 10 points.
            </p>
          </div>
          <div>
            <p className="common_text already">
              Already Have An Account ?{" "}
              <span>
                <Link to={"/signin"}>Sign In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
