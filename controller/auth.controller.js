import axios from "axios";
import cookie from "cookie"
import jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt'
axios.defaults.baseURL = "http://localhost:3000"

export const signup = async (req,res)=>{
    try {
        const { companyName, founderName, email, mobile, password, gst } = req.body;
        const {data: Company} = await axios.post("/api/admin/company",{companyName,founderName,gst})
        
       const {data: User} = await axios.post("/api/admin/users",{email,mobile,password,company: Company._id})
       
       const token = jwt.sign({
        uid: User._id,
        company: User.company,
        email: User.email,
        founderName: Company.founderName,
        companyName: Company.companyName
       },process.env.TOKEN_SECRET,{expiresIn: 608400})
       const authCookie = cookie.serialize("authToken",token,{
            httpOnly: true,
            maxAge: 608400,
            path: "/"
        }) 
       res.setHeader('Set-Cookie',authCookie)
       res.status(200).json({success: true})
    }
    catch(err)
    {
        console.log(err);
        //res.status(500).json(err.response.data)
    }
}

export const login = async (req,res)=>{
    try{
        const { email, password } = req.body;
        const { data: Users } = await axios.get(`/api/admin/users?email=${email}`)
    
        const isAuth = await bcrypt.compare(password,Users.password)
       if(!isAuth) return res.status(401).json({err: false})

       const token = jwt.sign({
        uid: Users._id,
        company: Users.company,
        email: Users.email
       },process.env.TOKEN_SECRET,{expiresIn: 608400})
       const authCookie = cookie.serialize("authToken",token,{
            httpOnly: true,
            maxAge: 608400,
            path: "/"
        }) 
       res.setHeader('Set-Cookie',authCookie)
       res.status(200).json({Login: true})
    }
    catch(err)
    {
        res.status(err.response.status).json(err.response.data);
    }
}

export const logout = async (req,res)=>{
    console.log("ogout");
    const authCookie = cookie.serialize("authToken","logout",{
        httpOnly: true,
        maxAge: 0,
        path: "/"
    }) 
    res.setHeader('Set-Cookie',authCookie)
    res.status(200).json({success: true})
}