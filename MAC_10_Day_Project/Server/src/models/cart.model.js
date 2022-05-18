const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
module.exports = mongoose.model("cart", cartSchema);
