import { createOrder } from "@/controller/razorpay.controller"

const handler = (req,res)=>{
    if(req.method == "POST") return createOrder(req,res)

    res.status(401).send("method not allowed")
}

export default handler