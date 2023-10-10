const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        product_id: {
            type: Number,
            trim: true,
        },
        product_name: {
            type: String,
            trim: true,
        },
        user_id : {
            type : mongoose.Types.ObjectId,
            ref : "user"
        },
        is_active: {
            type: Boolean,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Product = mongoose.model("product",productSchema)

module.exports = Product