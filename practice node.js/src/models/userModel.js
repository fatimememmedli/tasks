const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
    discountPercentage: String,
    price: String,
  },
  { collection: "products", timestamps: true }
);
const Products = mongoose.model("products", schema);
module.exports = Products;
