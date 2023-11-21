import mongoose from "mongoose";
const { Schema } = mongoose;
        
const productSchema = new Schema({
    title: {
        type: String,
        required: [true,"title Name is Required"]
    },
    category: {
        type: String,
        required: [true,"category Name is Required"]
    },
    image: String,
    discount: {
        type: Number
    },
    price: {
        type: Number,
        required: [true,"price is Required"]
    },
    quantity: {
        type: Number,
        required: [true,"quantity is Required"]
    },
    description: {
        type: String,
        required: [true,"description is Required"]
    },
    createddAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})


mongoose.models = {}
const Product = mongoose.model("Product",productSchema);
export default Product;