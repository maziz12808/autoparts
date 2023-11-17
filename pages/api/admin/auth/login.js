import { login } from "@/controller/auth.controller"

const handler = (req,res)=>{
    if(req.method == "POST") return login(req,res);

    res.status(404).send("method not allowed")
}

export default handler