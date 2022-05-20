import React, { useEffect, useState } from "react";
import "./Favourites.css";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

export const Favourites = () => {
  const [data, setData] = useState([]);

  const Favdisplay = () => {
    fetch(`http://localhost:8081/register/6283c78c7e03a6517f8866a5`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.wishList);
        setData(res.wishList);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    Favdisplay();
  }, []);

  const userID = localStorage.getItem("UserID");
  console.log("userID:", userID);

  const movetoBag = () => {
    fetch(
      `http://localhost:8081/register/updateCart/6283c78c7e03a6517f8866a5`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: { "Content-Type": "Application/json" },
      },
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    alert("Yay! Product added to Cart");
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="Fav_Div">
        <h2 style={{ color: "#1373e0" }}>
          Here, the items are in your Favourite List
        </h2>
        <hr style={{ marginBottom: "5vh" }} />
        {data.map((e) => (
          <div key={e._id} className="each_fav_div">
            <div>
              <img src={e.image} alt={e.title} />
            </div>
            <div className="product_des">
              <p>{e.title}</p>
              <p>
                <span style={{ color: "#6262c0" }}>
                  <h3>Description : </h3>
                </span>
                {e.description}
              </p>
              <p>
                <span style={{ fontWeight: 500, color: "red" }}>Price $</span>{" "}
                {e.price}
              </p>
              <p>Rating : {e.rating}</p>
              <button
                className="button-33"
                style={{ color: "black", fontWeight: 600 }}
                onClick={movetoBag}
              >
                Move to Bag
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
