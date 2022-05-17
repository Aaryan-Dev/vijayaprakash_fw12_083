import React from "react";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
import "./Signin.css";

export const SignIn = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>Sign In</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
