const Joi = require("joi");

// create cart
const createCart = {
    body: Joi.object().keys({
        cart_id: Joi.number().integer().required(),
        stock: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        total: Joi.number().integer().required(),
    }),
  };

module.exports = {
    createCart
};