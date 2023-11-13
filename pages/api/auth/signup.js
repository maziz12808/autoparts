import { signup } from "@/controller/auth.controller"
const user = (req,res)=>{
    if(req.method === "POST") return signup(req,res)
}

export default user