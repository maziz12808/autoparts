import Head from "next/head"
import Link from "next/link" 
import { useRouter } from "next/router"
import { useState } from "react" 
import axios from "axios"
import Cookies from "universal-cookie"
import {
    Button,
    Layout,
    Menu,
    message
} from "antd"
import { MenuOutlined,DashboardOutlined,LogoutOutlined } from "@ant-design/icons"

const { Header, Sider, Content } = Layout
const { Item } = Menu

const AdminLayout = ({children,title=null,toolbar=null})=>{
    // Const 
    const [openSider, setOpenSider] = useState(false) 
    const [current, setCurrent] = useState('mail');
    const router = useRouter()
    const cookie = new Cookies()
    const menus = [
        {
            label: <Link href="/admin">Dashboard</Link>,
            key: "admin",
            icon: <DashboardOutlined />
        },
        {
            label: "Products",
            key: "products",
            icon: <i className='bx bxl-product-hunt' />,
            children: [
                {
                  label: <Link href="/admin/products">Porducts</Link>,
                  key: 'products:1',
                },
                {
                  label: <Link href="/admin/products/products-category">Porducts Category</Link>,
                  key: 'products:2',
                },
            ]
        }
    ]

    const logout = async ()=>{
        try{
            const {data} = await axios.post("/api/admin/auth/logout")

            router.push("/admin/login")
        }
        catch(err)
        {;
            message.error("logout failed please try latter")
        }
    }
    const onClick = (e) => {
        setCurrent(e.key);
      };
    return (
        <>
            <Head>
                <title>{title && title}</title>
            </Head>
            <Layout>
                <Sider trigger={null} collapsible collapsed={openSider} className="min-h-screen">
                    <Menu theme="dark" items={menus} selectedKeys={[current]} onClick={onClick}>
                       
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="bg-white px-4 flex justify-between items-center">
                        <Button icon={<MenuOutlined />} type="text" onClick={()=> setOpenSider(!openSider)} />
                        <div className="flex gap-3">
                            {
                                toolbar && toolbar.map((toolbarItem,toolbarINdex)=>(
                                    toolbarItem
                                ))
                            }
                            <Button onClick={logout} type="text" icon={<LogoutOutlined />} />
                        </div>
                    </Header>
                    <Content className="p-4">
                        {
                            children
                        }
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default AdminLayout