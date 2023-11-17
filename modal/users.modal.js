import mongoose from "mongoose";
import bcrypt from "bcrypt" 

const { Schema } = mongoose;

const userSchema = new Schema({
    company: { type: Schema.ObjectId, ref: "Company" },
    email: {
        type: String,
        trim:true,
        required: "email is Required"
    },
    mobile: {
        type: String,
        trim:true,
        required: "mobile number is Required"
    },
    password: {
        type: String,
        required: "password is Required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    opdatedAt: {
        type: Date,
        default: Date.now
    }
})

userSchema.pre("save",async function(next) {
    const encryptedPassword = await bcrypt.hash(this.password.toString(),12)
    this.password = encryptedPassword;
    next()
})

mongoose.models = {}
const user = mongoose.model("User",userSchema);
export default user;