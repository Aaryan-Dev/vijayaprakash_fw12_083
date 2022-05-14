const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const productsControllers = require("./controllers/products.controller");

app.use("/products", productsControllers);

module.exports = app;
