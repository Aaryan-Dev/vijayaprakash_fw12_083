import React from "react";
import { NavBar } from "../NavBar/NavBar";
import "./Signup.css";

export const Signup = () => {
  return (
    <div>
      <NavBar />
      <br />
      <h3>Create an Account</h3>

      <div>
        Username : <input type="text" />
        <br />
        Password : <input type="text" />
        <br />
        Re-Enter Password : <input type="text" />
      </div>

      {/* <button className="create_account_btn">Create Account</button> */}
      <button className="button-84">Create Account</button>
    </div>
  );
};
