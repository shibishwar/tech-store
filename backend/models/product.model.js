import mongoose from "mongoose";

// Define the product schema to specify the structure of the product data
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema); // Create a model called 'Product' based on the product schema

export default Product;
