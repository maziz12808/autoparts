import mongoose from "mongoose";
const { Schema } = mongoose;

const companySchema = new Schema({
    companyName: {
        type: String,
        trim:true,
        required: "Company Name is Required"
    },
    founderName: {
        type: String,
        trim:true,
        required: "Founder Name is Required"
    },
    gst: {
        type: String,
        trim:true,
        required: "gst number is Required"
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
companySchema.pre("save",async function(next) {
    const query = {companyName: this.companyName}
    const userLength = await mongoose.model("Company").countDocuments(query)
    if(userLength) throw next("company name already exist!")
    next()
})

mongoose.models = {}
const company = mongoose.model("Company",companySchema);
export default company;