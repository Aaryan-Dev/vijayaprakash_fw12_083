const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const productsController = require("./controllers/products.controller");

///////////////////////////////////

// const productDetailsController = require("./controllers/productDetails.controller");
// const cartController = require("./controllers/cart.controller");
const signUp = require("./controllers/users.controller");
const login = require("./controllers/login.controller");

// app.use("/productDetail", productDetailsController);
// app.use("/cart", cartController);
app.use("/register", signUp);
app.use("/login", login);

///////////////////////////////////

app.use("/products", productsController);

module.exports = app;
