import {fetch} from "@/controller/clientProduct.controller"
const products = async (req,res)=>{
    if(req.method === "GET") return fetch(req,res)

    res.status(404).send("mehtod not allowed")
}

export default products