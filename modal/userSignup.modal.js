import mongoose from "mongoose";
const { Schema } = mongoose

const userSignupSchema = new Schema({
    user: { type: Schema.ObjectId, ref: "UserCredential" },
    username: {type: String,required: [true,"username is required"]},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

mongoose.models = {}

const UserSignup = mongoose.model("UserSignup",userSignupSchema);
export default UserSignup