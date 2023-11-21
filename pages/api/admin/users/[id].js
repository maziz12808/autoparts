import { fetchById } from "@/controller/users.controller"

const user = (req,res)=>{
    if(req.method === "GET") return fetchById(req,res)

    res.status(404).send("method not allowed")
}

export default user