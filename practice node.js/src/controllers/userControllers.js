const Products = require("./../models/userModel");
console.log(Products);
const getAllProducts = async (req, res) => {
  let allProducts = await Products.find({});
  console.log(req.query.name);
  if (!req.query.name && !req.query.price) {
    res.send(allProducts);
  }
  if (req.query.name) {
    res.send(
      allProducts.filter((a) =>
        a.name.toLowerCase().includes(req.query.name.toLowerCase())
      )
    );
  }
  if (req.query.price) {
    res.send(allProducts.filter((a) => a.price == req.query.price));
  }
  if (req.query.price && req.query.name) {
    res.send(
      allProducts.filter(
        (elem) => elem.name == req.query.name && elem.price == req.query.price
      )
    );
  }
};
module.exports = { getAllProducts };
