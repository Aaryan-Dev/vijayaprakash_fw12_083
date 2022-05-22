const express = require("express");

const User = require("../models/users.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log("user:", user);
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

router.post("", async (req, res) => {
  try {
    var user = await User.findOne({ email: req.body.email }).lean().exec();
    if (user)
      return res.status(400).send({ message: "Email Already Registered" });

    // console.log("user:", user);
    user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

router.get("/data", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    // console.log("user:", user);
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

router.get("/:id", async (req, res) => {
  // console.log("req:", req.params.id);
  try {
    const user = await User.findById(req.params.id).lean().exec();
    // console.log("user:", user);
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.patch("/updateCart/:userId", async (req, res) => {
  try {
    let product = req.body;
    console.log("from update", product);
    console.log("req.params.userId:", req.params.userId);

    const user = await User.findById(req.params.id).lean().exec();
    console.log("user:", user);
    let result = await User.findByIdAndUpdate(req.params.userId, {
      $push: { cartItems: product },
    })
      .lean()
      .exec();
    console.log("result:", result);

    res.status(200).send(result);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.patch("/updateFav/:userId", async (req, res) => {
  try {
    let product = req.body;
    console.log("from update", product);

    let result = await User.findByIdAndUpdate(req.params.userId, {
      $push: { wishList: product },
    })
      .lean()
      .exec();

    res.status(200).send(result);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

// router.patch("/purchased", async (req, res) => {
//   try {
//     let product = req.body;
//     console.log("from update", product);
//     console.log("req.params.userId:", req.params.userId);

//     const user = await User.findById(req.params.id).lean().exec();
//     console.log("user:", user);
//     let result = await User.findByIdAndUpdate(req.params.userId, {
//       $push: { cartItems: product },
//     })
//       .lean()
//       .exec();
//     console.log("result:", result);

//     res.status(200).send(result);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, status: "Failed" });
//   }
// });

module.exports = router;
