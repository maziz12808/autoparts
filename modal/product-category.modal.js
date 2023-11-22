import mongoose from "mongoose";
const { Schema } = mongoose;
        
const productCategorySchema = new Schema({
    category: {
        type: String,
        required: [true,"category Name is Required"]
    },
    image: String,
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
const ProductCategory = mongoose.model("ProductCategory",productCategorySchema);
export default ProductCategory;