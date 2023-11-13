import "@/module/db.module"
import UserCredential from "@/modal/userCredientail.modal"

export const createUserCredential = async (req,res)=>{
    try{
        const { email, password } = req.body
    const userCredential = new UserCredential({email, password})
    await userCredential.save()
    userCredential.password= undefined
    res.status(200).send(userCredential);
    }
    catch(err)
    {
        res.status(409).send(err);
    }
}

export const fetchUserCredential = async (req,res)=>{
    const user = await UserCredential.findOne(req.query)
    if(!user) res.status(404).json({message: "user not found !"})
    
    res.status(200).json(user)
}