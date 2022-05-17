import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
import "./Signup.css";

export const Signup = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div id="sign_up">
        <div>
          <Link to={"/"}>
            <img
              src="https://i.pinimg.com/600x315/1e/29/77/1e2977ca1225981e307ad8d2c26a9040.jpg"
              alt=""
              id="logo_img"
              style={{
                width: "30%",
                // border: "1px solid red",
                marginBottom: "-3%",
              }}
            />
          </Link>
        </div>
        <div id="create_account">
          <h3>Please enter the required details to create an Account</h3>
          <form action="">
            <input type="email" placeholder="Email address" id="signup_email" />
            <br />
            <br />
            <input
              type="password"
              placeholder="6-20 characters (letters or numbers only)"
              id="signup_password"
            />
            <br />
            <br />
            <input type="password" placeholder="Enter password again" />
            <br />
            <br />
          </form>
          <div className="agree">
            <input type="checkbox" />
            <p class="common_text">
              I agree to the <span style={{ color: "red" }}>Shopp.my</span>{" "}
              <a href="#">Terms & Conditions</a> <a href="#">Privacy Policy.</a>
            </p>
          </div>
          <div className="agree" style={{ display: "none" }}>
            <input type="checkbox" />
            <p class="common_text">
              Yes, Sign up our newsletter, get Rs.150 coupons in your first
              email! You will receive our latest updates, news, and promotions
              from
              <span style={{ color: "red" }}>Shopp.my</span>.
            </p>
          </div>
          <div>
            <button id="create_button" onclick="signup()">
              Create My Account
            </button>
            <p class="common_text grey">
              Register at <span style={{ color: "red" }}>Shopp.my</span> and
              receive 10 points.
            </p>
          </div>
          <div>
            <p class="common_text already">
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
