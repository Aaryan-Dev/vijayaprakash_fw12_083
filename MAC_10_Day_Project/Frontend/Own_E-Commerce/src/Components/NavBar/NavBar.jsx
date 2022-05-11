import React from "react";
import "./NavBar.css";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <div className="Navbar">
        <Link to={"/"}>
          <img
            className="logo_img"
            src="https://i.pinimg.com/600x315/1e/29/77/1e2977ca1225981e307ad8d2c26a9040.jpg"
            alt="Logo"
          />
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Find Products..." />
          <button className="button-84" role="button">
            Search
          </button>
        </div>
        <div className="User-detail">
          <div className="button">
            <button className="button-33" role="button">
              <LocalMallRoundedIcon />
            </button>
            <button className="button-33" role="button">
              <FavoriteRoundedIcon />
            </button>
            <button className="button-33" role="button">
              <PersonRoundedIcon />
            </button>
          </div>
          <div className="button_text">
            <p>Cart</p>
            <p>Wish List</p>
            <p>Account</p>
          </div>
        </div>
      </div>
      <hr className="hr-tag" />
    </div>
  );
};
