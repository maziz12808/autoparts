const { Button } = require("antd")
import useRazorpay from "react-razorpay";
import axios from "axios"
axios.defaults.baseURL = process.env.NEXT_PUBLIC_END_POINT
const Razorpay = ()=>{
    const [Razorpay] = useRazorpay();
    const onPayNow = async (amount)=>{
        try {
            const {data: {id}} = await axios.post("/api/razorpay/order",{amount})
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
                amount,
                currency: "INR",
                name: "react course",
                description: "Test Transaction",
                image: "https://logos-world.net/wp-content/uploads/2020/05/Huawei-Logo.jpg",
                order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                handler: function (response) {
                  alert(response.razorpay_payment_id);
                  alert(response.razorpay_order_id);
                  alert(response.razorpay_signature);
                },
                prefill: {
                  name: "Piyush Garg",
                  email: "youremail@example.com",
                  contact: "9999999999",
                }
            };
            const rzp1 = new Razorpay(options);
            rzp1.open();
        }
        catch(err)
        {
            console.log(err);
        }
    }
    return (
        <Button onClick={()=> onPayNow(5000)}>Pay Now</Button>
    )
}

export default Razorpay