import { lightBlue, red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "./ProductDetails.css";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useSelector } from "react-redux";

export const ProductDetails = () => {
  const [data, setData] = useState([]);
  const id = useParams();
  const Logged_userid = useSelector((state) => state.userId);
  console.log("Logged_userid:", Logged_userid);

  const display = () => {
    fetch(`http://localhost:8081/products/${id.id}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    display();
  }, []);

  const cart_product = { ...data };

  const addToCart = (query) => {
    // console.log("cart_product:", cart_product);

    if (query == "addtocart") {
      fetch(`http://localhost:8081/`, {
        method: "POST",
        body: JSON.stringify(cart_product),
        headers: { "Content-Type": "Application/json" },
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      alert("Yay! Product added to Cart");
    } else {
      fetch(`http://localhost:8080/favourites`, {
        method: "POST",
        body: JSON.stringify(cart_product),
        headers: { "Content-Type": "Application/json" },
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      alert("Yay! Product added to Favourites");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="each_product_detail" key={data.id}>
        <div>
          <img src={data.image} alt={data.title} />
        </div>
        <div className="each_product_detail_text">
          <p>{data.title}</p>
          <div className="prod_des">
            <p
              style={{
                color: "blueviolet",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              Product Description :
            </p>
            {data.description}
          </div>
          <p style={{ fontWeight: "700" }}>
            <span style={{ color: "red" }}> Price $ </span>
            {data.price}
          </p>
          <p>
            <span style={{ color: "blueviolet" }}>Rating : </span>
            {data.rating}
          </p>
          <div className="two_buttons">
            <button
              className="button-33 Add_to_cart_btn"
              role="button"
              onClick={() => addToCart("addtocart")}
            >
              Add to Bag
            </button>
            <button
              className="button-33 Add_to_wishlist_btn"
              role="button"
              style={{ paddingBottom: "10px" }}
              onClick={() => addToCart("addtowishlist")}
            >
              WishList{" "}
              <span>
                <FavoriteRoundedIcon
                  style={{ paddingBottom: "0px", fontSize: "15px" }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
