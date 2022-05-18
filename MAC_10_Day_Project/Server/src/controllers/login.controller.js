const express = require("express");

const User = require("../models/users.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).lean().exec();
    if (!user) return res.status(400).json({ message: "Email not registered" });

    console.log("user:", user);
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
