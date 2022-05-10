import React from "react";
import { NavBar } from "../NavBar/NavBar";
import "./ShowProducts.css";

export const ShowProducts = () => {
  return (
    <div>
      <NavBar />
      <div className="category">
        <button>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Top Offers</p>
        </button>
        <button>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Mobiles</p>
        </button>
        <button>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Electronics</p>
        </button>
        <button>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Men</p>
        </button>
        <button>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Women</p>
        </button>
        <button>
          <img
            src="https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1-.jpg?auto=webp&quality=75&crop=2:1&width=1024"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Laptops</p>
        </button>
        <button>
          <img
            src="https://image.shutterstock.com/image-photo/camera-260nw-610909205.jpg"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Camera</p>
        </button>
        <button>
          <img
            src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxsZXJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Jewelery"
          />
          <p style={{ fontSize: "16px" }}>Others</p>
        </button>
      </div>
    </div>
  );
};
