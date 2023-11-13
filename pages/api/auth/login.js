import { userLogin } from "@/controller/auth.controller"

const user = (req,res)=>{
    if(req.method === "POST") return userLogin(req,res)
}

export default user