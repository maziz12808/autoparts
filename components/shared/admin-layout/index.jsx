import Head from "next/head"
import Link from "next/link" 
import { useRouter } from "next/router"
import { useState } from "react" 
import axios from "axios"
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
    const router = useRouter()
    const menus = [
        {
            label: "Dashboard",
            href: "/admin",
            icon: <DashboardOutlined />
        },
        {
            label: "Products",
            href: "/admin/products",
            icon: <i className='bx bxl-product-hunt' />
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
    return (
        <>
            <Head>
                <title>{title && title}</title>
            </Head>
            <Layout>
                <Sider trigger={null} collapsible collapsed={openSider} className="min-h-screen">
                    <Menu theme="dark">
                        {
                            menus.map((menuItems,menuIndex)=>(
                                <Item icon={menuItems.icon} key={menuIndex}>
                                    <Link href={menuItems.href}>
                                        {menuItems.label}
                                    </Link>
                                </Item>
                            ))
                        }
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