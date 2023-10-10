const { Order } = require("../models");

// craete order
const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};

// get order list
const getOrderList = async () => {
  return Order.find()
  .populate("user")
  .populate("product")
  .populate("cart");
};

// get details
const getOrderById = async (orderId) => {
  return Order.findById(orderId);
};

// update details
const updateDetails = async (orderId, updateBody) => {
  return Order.findByIdAndUpdate(orderId, { $set: updateBody });
};

// delete order
const deleteOrder = async (orderId) => {
  return Order.findByIdAndDelete(orderId);
};

module.exports = {
  createOrder,
  getOrderList,
  getOrderById,
  updateDetails,
  deleteOrder,
};
