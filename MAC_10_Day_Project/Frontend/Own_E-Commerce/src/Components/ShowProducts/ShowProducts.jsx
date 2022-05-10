import React, { useEffect, useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import "./ShowProducts.css";

export const ShowProducts = () => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState([]);

  const display = () => {
    fetch(`http://localhost:8080/products`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setSort(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    display();
  }, []);

  // console.log("sort:", sort);

  const handleSort = (query) => {
    if (query == "mobile") {
      let temp = data.filter((e) => e.category == query);
      setSort(temp);
    } else if (query == "men's clothing") {
      let temp = data.filter((e) => e.category == query);
      setSort(temp);
    } else if (query == "women's clothing") {
      let temp = data.filter((e) => e.category == query);
      setSort(temp);
    } else if (query == "camera") {
      let temp = data.filter((e) => e.category == query);
      setSort(temp);
    } else if (query == "laptop") {
      let temp = data.filter((e) => e.category == query);
      setSort(temp);
    } else if (query == "electronics") {
      let temp = data.filter((e) => e.category == query);
      setSort(temp);
    } else if (query == "jewelery") {
      let temp = data.filter((e) => e.category == query);
      setSort(temp);
    } else if (query == "Rating") {
      let temp = [...sort];
      temp.sort((a, b) => b.rating - a.rating);
      setSort(temp);
    } else if (query == "cost low to high") {
      let temp = [...sort];
      temp.sort((a, b) => a.price - b.price);
      setSort(temp);
    } else if (query == "cost high to low") {
      let temp = [...sort];
      temp.sort((a, b) => b.price - a.price);
      setSort(temp);
    } else if (query == "all") {
      setSort(data);
      return;
    }
  };

  return (
    <div>
      <NavBar />
      <div className="category">
        <button onClick={() => handleSort("all")}>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Top Offers</p>
        </button>
        <button onClick={() => handleSort("mobile")}>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Mobiles</p>
        </button>
        <button onClick={() => handleSort("electronics")}>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Electronics</p>
        </button>
        <button onClick={() => handleSort("men's clothing")}>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Men</p>
        </button>
        <button onClick={() => handleSort("women's clothing")}>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Women</p>
        </button>
        <button onClick={() => handleSort("laptop")}>
          <img
            src="https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1-.jpg?auto=webp&quality=75&crop=2:1&width=1024"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Laptops</p>
        </button>
        <button onClick={() => handleSort("camera")}>
          <img
            src="https://image.shutterstock.com/image-photo/camera-260nw-610909205.jpg"
            alt=""
          />
          <p style={{ fontSize: "16px" }}>Camera</p>
        </button>
        <button onClick={() => handleSort("jewelery")}>
          <img
            src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxsZXJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Jewelery"
          />
          <p style={{ fontSize: "16px" }}>Jewelery</p>
        </button>
      </div>
      <br />
      <hr />

      <div className="filters_Sorts">
        <button onClick={() => handleSort("Rating")}>Filter By Rating</button>
        <button onClick={() => handleSort("cost low to high")}>
          Cost Low to High
        </button>
        <button onClick={() => handleSort("cost high to low")}>
          Cost High to Low
        </button>
      </div>

      <div className="Show_products">
        {sort.map((e) => (
          <div key={e.id} className="each_product" title={e.title}>
            <img src={e.image} alt="" />
            <p className="product_name">{e.title}</p>
            <p className="product_price">$ {e.price}</p>
            <p className="product_rating">Rating : {e.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
