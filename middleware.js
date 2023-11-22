import { NextResponse } from "next/server";
const res = NextResponse

export const  middleware = async (req)=>{
    const auth = req.cookies.has("authToken");
    if(req.nextUrl.pathname.startsWith('/admin/login'))
    {
        if(!auth) return  res.next()
        try{
            const {value} =  req.cookies.get("authToken");
            const http = await fetch(`${process.env.END_POINT}/api/token/${value}`)
            if(http.status !== 200) return res.next()
            
            return res.redirect(new URL("/admin/dashboard",req.url))
        }
        catch(err)
        {
            return res.next()
        }
    }

    if(req.nextUrl.pathname.startsWith('/admin/signup'))
    {
        if(!auth) return  res.next()
        try{
            const {value} =  req.cookies.get("authToken");
            const http = await fetch(`${process.env.END_POINT}/api/token/${value}`)
            if(http.status !== 200) return res.next()
            
            return res.redirect(new URL("/admin/dashboard",req.url))
        }
        catch(err)
        {
            return res.next()
        }
    }
    
    if(req.nextUrl.pathname.startsWith('/admin/dashboard'))
    {
        if(!auth) return res.redirect(new URL("/admin/login",req.url))
        try{
            const {value} =  req.cookies.get("authToken");
            const http = await fetch(`${process.env.END_POINT}/api/token/${value}`)
            if(http.status !== 200) return res.redirect(new URL("/admin/login",req.url))
            const session = await http.json()
            const header = res.next()
            header.cookies.set({
                name: "session",
                value: JSON.stringify(session),
                path: "/"
            })
            return header
        }
        catch(err)
        {
            return res.redirect(new URL("/admin/login",req.url))
        }
    }
    
} 

export const config = {
    matcher: ["/admin/dashboard","/admin/login","/admin/signup"]
}