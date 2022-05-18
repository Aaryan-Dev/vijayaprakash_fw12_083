const Products = require("../models/products.model");
const express = require("express");

const router = express.Router();
console.log("4th line");

router.post("", async (req, res) => {
  try {
    const product = await Products.create(req.body);
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    // console.log("Hey");
    const product = await Products.find().lean().exec();
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id).lean().exec();
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params).lean().exec();
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
