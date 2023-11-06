import LayoutEl from "../shared/layout"
import {
    Form,
    Input,
    Button
} from "antd"
const {Item} = Form
const Signup = ()=>{
    const login = (value)=>{
        console.log(value);
    }
    const signup = (value)=>{
        console.log(value);
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