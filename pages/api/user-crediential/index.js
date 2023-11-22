import { 
    createUserCredential,
    fetchUserCredential 
} from "@/controller/user-crediential.controller"

const userCrediential = (req,res)=>{
    if(req.method === "GET") return fetchUserCredential(req,res)
    if(req.method === "POST") return createUserCredential(req,res)
}

export default userCrediential