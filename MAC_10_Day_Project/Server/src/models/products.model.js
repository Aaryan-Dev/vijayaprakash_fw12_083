const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  id: { type: String, required: false },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: String, required: true },
});

const Products = new mongoose.model("products", productsSchema);

module.exports = Products;
