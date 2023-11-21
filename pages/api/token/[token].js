import { verifyToken } from "@/controller/token.controller"

const user = (req,res)=>{
    if(req.method === "GET") return verifyToken(req,res)

    res.status(404).send("method not allowed")
}

export default user