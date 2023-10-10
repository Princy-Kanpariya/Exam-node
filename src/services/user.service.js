const { User } = require("../models");

// craete user
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

// get user list
const getUserList = async () => {
  return User.find({$or : [{is_active: true}]})
};

// get deatils
const getUserById = async (userId) => {
  return User.findById(userId);
};

// update details
const updateDetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

// delete user
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateDetails,
  deleteUser,
};
