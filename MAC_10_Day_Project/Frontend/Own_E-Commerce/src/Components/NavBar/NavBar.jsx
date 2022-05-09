import React from "react";
import "./NavBar.css";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

export const NavBar = () => {
  return (
    <div className="Navbar">
      <img
        src="https://i.pinimg.com/600x315/1e/29/77/1e2977ca1225981e307ad8d2c26a9040.jpg"
        alt="Logo"
      />
      <div className="search-bar">
        <input type="text" placeholder="Find Products..." />
        <button class="button-84" role="button">
          Search
        </button>
      </div>
      <div className="User-detail">
        <div className="button">
          <button class="button-33" role="button">
            <LocalMallRoundedIcon />
          </button>
          <button class="button-33" role="button">
            <FavoriteRoundedIcon />
          </button>
          <button class="button-33" role="button">
            <PersonRoundedIcon />
          </button>
          {/* <button>
            <LocalMallRoundedIcon />
          </button>
          <button>
            <FavoriteRoundedIcon />
          </button>
          <button>
            <PersonRoundedIcon />
          </button> */}
        </div>
        <div className="button_text">
          <p>Cart</p>
          <p>Wish List</p>
          <p>Account</p>
        </div>
      </div>
    </div>
  );
};
