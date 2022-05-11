import { lightBlue, red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "./ProductDetails.css";

export const ProductDetails = () => {
  const [data, setData] = useState([]);

  const id = useParams();
  console.log("id:", id);

  const display = () => {
    fetch(`http://localhost:8080/products/${id.id}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    display();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="each_product_detail">
        <div>
          <img src={data.image} alt={data.title} />
        </div>
        <div className="each_product_detail_text">
          <p>{data.title}</p>
          <p className="prod_des">
            <h3 style={{ color: "blueviolet" }}>Product Description :</h3>
            {data.description}
          </p>
          <h3>
            <span style={{ color: "red" }}> Price $ </span>
            {data.price}
          </h3>
          <p>
            <span style={{ color: "blueviolet" }}>Rating : </span>
            {data.rating}
          </p>
        </div>
      </div>
    </div>
  );
};
