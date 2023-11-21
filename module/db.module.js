<<<<<<< HEAD
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/course")
export default mongoose;

=======
import mongoose from "mongoose"
mongoose.connect(
    process.env.PROD ? process.env.DB : process.env.DEV_DB
)
export default mongoose
>>>>>>> dashboard
