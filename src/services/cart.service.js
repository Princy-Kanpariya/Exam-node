const { Cart } = require("../models");

// create cart
const createCart = async (reqBody) => {
  return Cart.create(reqBody);
};

// get cart list
const getCartList = async () => {
  return Cart.find()
  .populate("user")
  .populate("product");
};

// get details
const getCartById = async (cartId) => {
  return Cart.findById(cartId);
};

// update details
const updateDetails = async (cartId, updateBody) => {
  return Cart.findByIdAndUpdate(cartId, { $set: updateBody });
};

// delete cart
const deleteCart = async (cartId) => {
  return Cart.findByIdAndDelete(cartId);
};

module.exports = {
  createCart,
  getCartList,
  getCartById,
  updateDetails,
  deleteCart,
};
