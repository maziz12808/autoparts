import jwt from "jsonwebtoken"

export const verifyToken = (req,res)=>{
    const { token } = req.query
    try{
        const data = jwt.verify(token,process.env.TOKEN_SECRET)
        res.status(200).json(data)
    }
    catch(err)
    {
        res.status(401).json(err)
    }
}