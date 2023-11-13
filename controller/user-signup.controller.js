import "@/module/db.module"
import UserSignup from "@/modal/userSignup.modal"

export const createUserSignup = async (req,res)=>{
    try{
        const { username, user } = req.body
    const userSignup = new UserSignup({ username,user })
    await userSignup.save()
    res.status(200).send(userSignup);
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
}