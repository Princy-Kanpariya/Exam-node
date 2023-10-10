const { Product } = require("../models");

// create product
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

// get product list
const getProductList = async () => {
  return Product.find().populate("user");
};

// get details
const getProductById = async (productId) => {
  return Product.findById(productId);
};

// update details
const updateDetails = async (productId, updateBody) => {
  return Product.findByIdAndUpdate(productId, { $set: updateBody });
};

// delete product
const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId);
};

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  updateDetails,
  deleteProduct,
};
