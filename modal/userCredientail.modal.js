import mongoose from "mongoose";
import bcrypt from "bcrypt"
const { Schema } = mongoose

const userCredentialSchema = new Schema({
    email: {type: String,required: [true,"username is required"]},
    password: {type: String,required: [true,"password is required"]},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

userCredentialSchema.pre("save",async function(next){
    const email = await mongoose
    .model("UserCredential")
    .countDocuments({email: this.email})
    if(email) throw next("Email already exist")
    const encryptedPassword =  await bcrypt.hash(this.password.toString(),12);
    this.password = encryptedPassword
    next()
})
mongoose.models = {}
const UserCredential = mongoose.model("UserCredential",userCredentialSchema)
export default UserCredential