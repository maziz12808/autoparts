import jwt from "jsonwebtoken"

const sessionMiddleware = (req,res,next)=>{
    const { authToken } =  req.cookies;
    if(!authToken) return res.status(401).send("Unauthorized")
    try{
        jwt.verify(authToken,process.env.JWT_SECRETE)
        next()
    }
    catch(err)
    {
        res.status(401).send("Unauthorized")
    }
}

export default sessionMiddleware