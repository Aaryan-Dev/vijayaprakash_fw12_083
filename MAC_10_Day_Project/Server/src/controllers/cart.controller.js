const express = require("express");

const Cart = require("../models/cart.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find().populate("product").lean().exec();
    return res.status(201).send(cart);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const cart = await Cart.create(req.body);
    console.log("cart:", cart);
    return res.status(201).send(cart);
  } catch (e) {
    // console.log(e);
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(cart);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;
