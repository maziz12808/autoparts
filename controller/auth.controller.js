import "@/module/db.module"
import axios from "axios"
import jwt from "jsonwebtoken"
import cookie from "cookie"
import bcrypt from "bcrypt"
axios.defaults.baseURL = process.env.ENDPOINT

export const signup = async (req,res)=>{
    try{
        const { email, password,username } = req.body
        const {data: userCrediential} = await axios.post("/api/user-crediential",{ email, password })
        const { data: userSignup } = await axios.post("/api/user-signup",{ 
            username ,user: userCrediential._id
        })
        const token = jwt.sign({
            email: userCrediential.email,
            username: userSignup.username
        },process.env.TOKEN_SECRET,{expiresIn: 84600})

        const cookieData = cookie.serialize("userAuth",token,{
            httpOnly: true,
            maxAge: 84600,
            path: "/"
        })
        res.setHeader("Set-Cookie",cookieData)
        res.status(200).json({signup: true});
    }
    catch(err)
    {
        res.status(err.response.status).json(err.response.data);
    }
}

export const userLogin = async (req,res)=>{
    const { email, password } = req.body
    try{
        const { data: User } = await axios.get(`/api/user-crediential?email=${email}`)
        
        const isVerified = await bcrypt.compare(password,User.password)
        if(!isVerified) return res.status(401).json({message: "unauthorized"})

        const token = jwt.sign({
            email: User.email,
            uid: User._id
        },process.env.TOKEN_SECRET,{expiresIn: 84600})
        
        const cookieData = cookie.serialize("userAuth",token,{
            httpOnly: true,
            maxAge: 84600,
            path: "/"
        })
        res.setHeader("Set-Cookie",cookieData)
        res.status(200).json({login: true});
    }
    catch(err)
    {
        res.status(err.response.status).json(err.response.data)
    }
    
} 