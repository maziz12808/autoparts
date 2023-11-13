import mongoose from "mongoose";
mongoose.connect(
    process.env.PROD ? process.env.DB : process.env.DEV_DB
)
export default mongoose