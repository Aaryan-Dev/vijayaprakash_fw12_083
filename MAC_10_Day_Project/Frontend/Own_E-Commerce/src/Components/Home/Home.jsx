import React, { useEffect, useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Home.css";

export const Home = () => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState([]);
  // console.log("sort:", sort);
  let [slide, setSlide] = useState(0);
  let [img, setImg] = useState(0);

  const slideshow_images = [
    "https://m.media-amazon.com/images/I/81mlHpf2x3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61OJMuYUzBL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61oNpFmniyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61SOcflSoPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61cVtPiiXsL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61k6hqpuqKL._SX3000_.jpg",
  ];

  const slide_img = [
    "https://m.media-amazon.com/images/I/81mlHpf2x3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61OJMuYUzBL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61oNpFmniyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61SOcflSoPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61cVtPiiXsL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61k6hqpuqKL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81mlHpf2x3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61OJMuYUzBL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61oNpFmniyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61SOcflSoPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61cVtPiiXsL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61k6hqpuqKL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81mlHpf2x3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61OJMuYUzBL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61oNpFmniyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61SOcflSoPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61cVtPiiXsL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61k6hqpuqKL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81mlHpf2x3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61OJMuYUzBL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61oNpFmniyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61SOcflSoPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61cVtPiiXsL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61k6hqpuqKL._SX3000_.jpg",
  ];

  // setInterval(() => {
  //   if (img == slide_img.length - 1) return setImg(0);
  //   setImg((img += 1));
  // }, 2000);

  useEffect(() => {
    setTimeout(
      () => setImg((prev) => (prev === slide_img.length - 1 ? 0 : prev + 1)),
      4000,
    );
    // return () => {};
  }, [img]);

  const handleSlideshow = () => {
    if (slide == slideshow_images.length - 1) return setSlide(0);
    setSlide((slide += 1));
  };

  const display = () => {
    fetch(`http://localhost:8081/products`)
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
          <p style={{ fontSize: "16px" }}>Offers</p>
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

      <div className="slideshow">
        <img src={slideshow_images[slide]} alt="" />
        <div>
          <button onClick={handleSlideshow}>
            <KeyboardArrowLeftIcon />
          </button>
          <button onClick={handleSlideshow}>
            <KeyboardArrowRightIcon />
          </button>
        </div>
      </div>

      <h2
        style={{
          color: "black",
          // border: "1px solid red",
          height: "7vh",
          marginTop: "-1.5vh",
          backgroundColor: "#b7c7e4",
          textAlign: "center",
          paddingTop: "1vh",
        }}
      >
        Popular Collections
      </h2>
      <div className="filters_Sorts ">
        <button
          onClick={() => handleSort("Rating")}
          className="button-84"
          style={{ height: "5vh" }}
        >
          Sort By Rating
        </button>
        <button
          onClick={() => handleSort("cost low to high")}
          className="button-84"
        >
          Cost Low to High
        </button>
        <button
          onClick={() => handleSort("cost high to low")}
          className="button-84"
        >
          Cost High to Low
        </button>
      </div>

      <div className="Show_products">
        {sort.map((e) => (
          <Link
            to={`/selected_product_details/${e._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div key={e._id} className="each_product" title={e.title}>
              <img src={e.image} alt={e.title} />
              <p className="product_name">{e.title}</p>
              <p className="product_price">
                <span
                  style={{ color: "red", fontSize: "16px", fontWeight: "500" }}
                >
                  Price ${" "}
                </span>
                {e.price}
              </p>
              <p className="product_rating">
                <span className="star_text">{e.rating}</span>
                <span className="star">
                  <StarIcon
                    style={{
                      // border: "1px solid red",
                      paddingBottom: "0px",
                      fontSize: "14px",
                      marginLeft: "2px",
                      // backgroundColor: "black",
                      color: "white",
                    }}
                  />
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div
        style={{
          // display: "none",
          // width: "80%",
          // border: "1px solid red",
          // paddingTop: "250vh",
          marginTop: "250vh",
          marginBottom: "50vh",
          margin: "auto",
          height: "50vh",
          overflow: "hidden",
        }}
      >
        <div class="auto-slide">
          <Link to={"#"}>
            <img
              src={slide_img[img]}
              alt=""
              style={{
                width: "100%",
                cursor: "pointer",
                // transform: `translate3d(${-img * 100}%, 0, 0)`,
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
