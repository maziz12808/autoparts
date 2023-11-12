import "@/module/db.module"
import Course from "@/modal/course.modal"
export const create = async (req,res)=>{
    const { name, price } = req.body;
    try{
        const course = new Course({ name, price });
        await course.save();
        res.status(200).json({course})
    }
    catch(err)
    {
        res.status(500).json({err})
    }
}
