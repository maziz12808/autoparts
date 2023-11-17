import { create, fetch } from "@/controller/peoduct.controller"
const product = (req,res)=>{
    if(req.method === "GET") return fetch(req,res)
    if(req.method === "POST") return create(req,res)

    res.status(404).send("Mehtod not allowed !")
}

export default product