const Joi = require("joi");

// create order
const createOrder = {
    body: Joi.object().keys({
        Order_id: Joi.number().integer().required(),
        stock: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        total: Joi.number().integer().required(),
    }),
  };

module.exports = {
    createOrder
};