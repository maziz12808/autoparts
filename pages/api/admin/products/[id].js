import { update, fetchById,trash } from "@/controller/peoduct.controller"
const product = (req,res)=>{
    if(req.method === "GET") return fetchById(req,res)
    if(req.method === "PUT") return update(req,res)
    if(req.method === "DELETE") return trash(req,res)

    res.status(404).send("Mehtod not allowed !")
}

export default product