import { create, fetch } from "@/controller/users.controller"
const users = (req,res)=>{
    const method = req.method
    if(method == "POST") return create(req,res)
    if(method == "GET") return fetch(req,res)

    res.status(404).send("method not allowed !")
}

export default users