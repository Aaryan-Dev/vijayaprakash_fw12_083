const mongoose = require("mongoose");
// const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartItems: [{ type: Object, required: false }],
    wishList: [{ type: Object, required: false }],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("users", userSchema);
