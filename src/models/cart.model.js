const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        cart_id: {
            type: Number,
            trim: true,
        },
        stock: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            trim: true,
        },
        total: {
            type: Number,
        },
        user_id : {
            type : mongoose.Types.ObjectId,
            ref : "user"
        },
        product_id : {
            type : mongoose.Types.ObjectId,
            ref : "product"
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Cart = mongoose.model("cart", cartSchema)

module.exports = Cart