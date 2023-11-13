import { createUserSignup } from "@/controller/user-signup.controller"

const userSignup = (req,res)=>{
    if(req.method === "POST") return createUserSignup(req,res)
}

export default userSignup