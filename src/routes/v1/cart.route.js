const express = require("express");
const { cartValidation } = require("../../validations");
const { cartController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create cart
router.post(
  "/create-cart",
  validate(cartValidation.createCart),
  cartController.createCart
);

// Get cart list
router.get(
  "/list",
  cartController.getCartList
);

// Get cart details by id
router.get(
  "/get-details/:cartId",
  cartController.getCartDetails
);

// cart details update by id
router.put(
  "/update-details/:cartId",
  cartController.updateDetails
);

// Delete cart
router.delete(
  "/delete-cart/:cartId",
  cartController.deleteCart
);

module.exports = router;
