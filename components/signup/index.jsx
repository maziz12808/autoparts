import LayoutEl from "../shared/layout"
import axios from "axios"
import { useState } from "react"
const http = axios.create({
    withCredentials: true
})
import {
    Form,
    Input,
    Button,
    message
} from "antd"
const {Item} = Form

const Signup = ()=>{
    // Const
    const [error,setError] = useState({
        state: "",
        message: ""
    })
    const [loginError,setLoginError] = useState({
        state: "",
        message: ""
    })

    // Functions
    const login = async (value)=>{
        try{
            const {data:{login}} = await http.post("/api/auth/login",value)
            if(login) message.success("Login Success")
        }
        catch(err)
        {
            console.log(err.response.status);
            if(err.response.status == 404 || err.response.status === 401) 
            setLoginError({state: "error",message: "Invalid Email Or Password"})

            setTimeout(()=>{
                setLoginError({
                    state: "",
                    message: ""
                })
            },3000)
        }
    }
    const signup = async (value)=>{
        try{
            await http.post("/api/auth/signup",value) 

        }
        catch(err)
        {
            if(err.response.status == 409) setError({state: "error",message: err.response.data})

            setTimeout(()=>{
                setError({
                    state: "",
                    message: ""
                })
            },3000)

        }
    }
    return (
        <LayoutEl>
            <div className="grid grid-cols-2 py-[3%] gap-16">
                <div>
                    <h1 className="text-xl mb-2">Login</h1>
                    <Form onFinish={login} layout="vertical">
                        <Item
                            name="email" 
                            label="Email" 
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                }
                            ]}
                        >
                            <Input size="large" />
                        </Item>
                        <Item
                            name="password" 
                            label="Password" 
                            validateStatus={loginError.state} 
                            help={loginError.message}
                            rules={[
                                {
                                    required: true,
                                    message: 'This field is required!',
                                }
                            ]}
                        >
                            <Input size="large" />
                        </Item>
                        <Item>
                            <Button 
                                size="large"
                                htmlType="submit" 
                                className="bg-orange-500 text-white font-semibold"
                            >Login</Button>
                        </Item>
                    </Form>
                </div>
                <div>
                <div>
                    <h1 className="text-xl mb-2">Register</h1>
                    <Form onFinish={signup} layout="vertical">
                        <Item
                            name="username" 
                            label="Username" 
                            rules={[
                                {
                                    required: true,
                                    message: 'This field is required!'
                                }
                            ]}
                        >
                            <Input size="large" />
                        </Item>
                        <Item
                            name="email" 
                            label="Email" 
                            validateStatus={error.state} 
                            help={error.message}
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'This field is required!',
                                }
                            ]}
                        >
                            <Input size="large" />
                        </Item>
                        <Item
                            name="password" 
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'This field is required!',
                                }
                            ]}
                        >
                            <Input size="large" />
                        </Item>
                        <Item>
                            <Button 
                                size="large"
                                htmlType="submit" 
                                className="bg-orange-500 text-white font-semibold"
                            >Signup</Button>
                        </Item>
                    </Form>
                </div>
                </div>
            </div>
        </LayoutEl>
    )
}

export default Signup