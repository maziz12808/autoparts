import Link from "next/link"
import { useRouter } from "next/router";
import axios from "axios";
import { 
    Form,
    Input,
    Button,
    message
} from "antd";
const {Item} = Form

const Login = ()=>{
    const router = useRouter();
   
    const login = async (value)=>{
        try{
            const data = await axios({
                method: "POST",
                url: "http://localhost:3000/api/admin/auth/login",
                data: value
            })
            console.log(data);
            router.push("/admin")
        }
        catch(err)
        {
            console.log(err);
        }
    }

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
       
            <div className="bg-white w-4/12 border flex flex-col gap-y-2 rounded-lg">
                <div className="bg-[#B1D3DB] p-3 flex items-center justify-center gap-x-2">
                    <i className='bx bx-lock-open-alt' style={{color: "#fff",fontSize: 30}}/>
                    <h1 className="text-2xl font-semibold">Login</h1>
                </div>
                
                <Form className="px-4 pt-3" onFinish={login}>
                    <Item 
                        name="email" 
                        rules={[
                            {required:true,message: "This field is required!"}
                        ]}>
                        <Input 
                            style={{borderRadius: 0}} 
                            placeholder="email@gmail.com" 
                            size="middle"
                        />
                    </Item>
                    <Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                        ]}
                    >
                        <Input.Password 
                            style={{borderRadius: 0}} 
                            placeholder="**********" 
                            size="middle" 
                        />
                    </Item>
                    <Item>
                        <Button 
                            htmlType="submit"
                            size="middle" 
                            className="bg-[#009688] border-0 w-full font-semibold text-white shadow-none" 
                            style={{borderRadius: 0}}

                        >Login</Button>
                    </Item>
                </Form>
                <div className="px-4 flex justify-center pb-2 gap-x-2 text-sm">
                    <p>Don't have an account? </p>
                    <Link href="/admin/signup" legacyBehavior>
                        <a className="text-[#009688] underline underline-offset-2">Register now</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login