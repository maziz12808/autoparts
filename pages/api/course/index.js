import { create } from "@/controller/course.controller"

const course = (req,res)=>{
    const method = req.method
    if(method == "POST") return create(req,res)

    res.status(404).send("method not allowed !")
}

export default course