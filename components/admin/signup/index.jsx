import Link from "next/link"
import { useRef, useState } from "react";
import countryCode from "@/json/CountryCodes"
import axios from 'axios';
import { useRouter } from "next/router";
const http = axios.create({withCredentials: true})
import { 
    Form,
    Input,
    Button,
    Select,
    message
} from "antd";
const {Item} = Form
const {Option} = Select

const Signup = ()=>{
    const router = useRouter()
    // Const 
    const [genPassword,setGentPassword] = useState("")
    const [form] = Form.useForm();
    const inputEl = useRef();
    const inputEmail = useRef();
    const defaultValue = {
        companyName: "wap",
        founderName:"Mr Aziz",
        email: "aziz@gmail.com",
        mobile: "02320329320",
        password: "aziz12808",
        gst: "asd23"

    }

  // FUNCTIONS
    const generatePass = ()=> {
        let pass = '';
        let str = 'AaZikl@mno123'
    
        for (let i = 1; i <= 8; i++) {
            let char = Math.floor(Math.random()
                * str.length + 1);
    
            pass += str.charAt(char)
        }
        form.setFieldValue('password',pass)
    }
    const prefixSelector = (
        <Item 
            name="prefix" 
            noStyle 
            rules={[
                {required: true,message:"This field is required"}
            ]}
        >
          <Select
            style={{
              width: 110,
            }}
            placeholder="+00"
          >
            {
                countryCode.map((item,index)=>(
                    <Option value={item.dial_code} key={index}>
                        {item.dial_code} {item.code}
                    </Option>
                ))
            }
          </Select>
        </Item>
      );
    
    const onFinish = async (value)=>{
        value.mobile = value.prefix+value.mobile
        try{
            const data = await http({
                method: "POST",
                url: "http://localhost:3000/api/admin/auth/signup",
                data: value
            })
            console.log(data);
            message.success("signup success")
            router.push("/admin")
            form.resetFields()
        }
        catch(err)
        { 
            console.log(err);
        }
    }

    return (
        
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
           
            <div className="bg-white w-4/12 border rounded-lg">
                <div className="bg-[#B1D3DB] p-3 flex items-center justify-center gap-x-2">
                    <i className='bx bx-lock-open-alt' style={{color: "#fff",fontSize: 30}}/>
                    <h1 className="text-2xl font-semibold">Signup</h1>
                </div>
                <div className=" flex flex-col gap-y-2 px-3 py-3">
                    <Form 
                        initialValues={defaultValue}
                        onFinish={onFinish} 
                        form={form}
                    >
                        <Item 
                            name="companyName" 
                            rules={[
                                {required:true,message: "This field is required!"}
                            ]}>
                            <Input 
                                style={{borderRadius: 0}} 
                                placeholder="Company Name" 
                                size="middle"
                            />
                        </Item>
                        <Item 
                            name="founderName" 
                            rules={[
                                {required:true,message: "This field is required!"}
                            ]}>
                            <Input 
                                style={{borderRadius: 0}} 
                                placeholder="Founder Name" 
                                size="middle"
                            />
                        </Item>
                        <Item 
                            name="email" 
                            rules={[
                                {required:true,message: "This field is required!"}
                            ]}>
                            <Input 
                                ref={inputEmail}
                                style={{borderRadius: 0}} 
                                placeholder="email@gmail.com" 
                                size="middle"
                            />
                            
                        </Item>
                        <Item
                            name="mobile"
                            rules={[
                            {
                                required: true,
                                message: 'This field is required!',
                            },
                            ]}
                        >
                            <Input addonBefore={prefixSelector} />
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
                                readOnly
                                ref={inputEl}
                                style={{borderRadius: 0}} 
                                placeholder="**********" 
                                size="middle"
                                addonBefore={
                                        <Button 
                                            htmlType="button" 
                                            onClick={generatePass} 
                                            type="text" 
                                            style={{background:"inherit"}}
                                        >Generate Password</Button>
                                }
                            />
                            
                        </Item>
                        <Item 
                            name="gst"
                            rules={[
                            {
                                required: true,
                                message: 'This field is required!',
                            },
                            ]} 
                        >
                            <Input 
                                style={{borderRadius: 0}} 
                                placeholder="gst" 
                                size="middle"
                            />
                            
                        </Item>
                        <Item>
                            <Button 
                                htmlType="submit"
                                size="middle" 
                                className="bg-[#009688] border-0 w-full font-semibold text-white shadow-none" 
                                style={{borderRadius: 0}}

                            >SignUp</Button>
                        </Item>
                    </Form>
                    <div className=" flex justify-center pb-2 gap-x-2 text-sm">
                        <p>Already have an account? </p>
                        <Link href="/admin/login" legacyBehavior>
                            <a className="text-[#009688] underline underline-offset-2">Login</a>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup