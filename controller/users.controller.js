import "@/module/db.module"
import User from "@/modal/users.modal"

export const create = async (req,res)=>{
    const { company, email, password, mobile } = req.body;
    try{
        const user =  User({ company, email, password, mobile })
        await user.save()
        user.password = undefined
        res.status(200).json(user)
    }
    catch(err)
    {
        res.status(500).json({success: false})
    }
}

export const fetchById = async (req,res)=>{
   try{
    const { papulate, id } = req.query; 
    let user = null;
    if(papulate == "true") return (
        user = await (await User.findById(id)).populate("company"),
        res.status(200).json(user)
    )
    user = await User.findById(id)
    res.status(200).json(user)
   }
   catch(err)
   {
    res.status(404).json(err)
   }
}

export const fetch = async (req,res)=>{
    try{
        const user = await User.findOne(req.query)
        if(!user) return res.status(401).json({success: false})

        res.status(200).json(user) 
    }  
    catch(err)
    {
        res.status(500).json(err.message)
    } 
}