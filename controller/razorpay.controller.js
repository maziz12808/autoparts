import Razorpay from "@/module/razorpay.module"
export const createOrder = async (req,res)=>{
    const {amount} = req.body
    try{
        const data = await Razorpay.orders.create({
            amount,
            currency: "INR",
            receipt: "wap-order-id"+Date.now()
        })
        res.status(200).json(data)
    }
    catch(err)
    {
        console.log("error");
        res.status(500).json(err.message)
    }
}