import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
    Dropdown,
    Space,
    Button,
    Input,
    Form,
    Select,
    Badge,
    Avatar,
    Drawer
} from "antd"
import { 
    DownOutlined,
    SettingOutlined,
    MenuOutlined,
    ThunderboltOutlined,
    UserOutlined,
    HeartOutlined,
    ShoppingCartOutlined,
    WhatsAppOutlined,
    YoutubeOutlined,
    InstagramOutlined,
    DingtalkOutlined,
    CloseOutlined
} from "@ant-design/icons"

const { Search } = Input;
const { Item } = Form;

const LayoutEl = ({children,title})=>{
    // States
    const [openAccountDrawer, setOpenAccountDrawer] = useState(false);

    // CONST
    const items = [
        {
          label: 'Spanish',
          key: '1',
        },
        {
          label: 'French',
          key: '2',
        },
        {
          label: 'Germen',
          key: '3',
        },
      ];
      const item = [
        {
          label: 'Spanish',
          key: '1',
        },
        {
          label: 'French',
          key: '2',
        },
        {
          label: 'Germen',
          key: '3',
        },
      ];

      const top_menu = [
        {
            label: "Track Order",
            href: "/track-order"
        },
        {
            label: "About Us",
            href: "/about-us"
        },
        {
            label: "Contact",
            href: "/contact"
        },
        {
            label: "FAQ",
            href: "/faq"
        }
      ];
      const searchOption = [
        {
            label: "All",
            value: "all"
        },
        {
            label: "Body Parts",
            value: "body-parts"
        },
        {
            label: "Brake Disks & Pads",
            value: "brake-disks&pads"
        },
        {
            label: "Engin Parts",
            value: "engin-parts"
        },
        {
            label: "Filters",
            value: "filters"
        },
        {
            label: "Oil & Fluids",
            value: "oil&fluids"
        },
        {
            label: "Tires & Wheels",
            value: "tires&wheels"
        },
        {
            label: "Tools & Equipment",
            value: "tools&equipment"
        }
      ]
      const letUsHelpYou = [
        {
            label: "Accessibility Statement",
            href: "accessibility-statement"
        },
        {
            label: "Your Orders",
            href: "your-orders"
        },
        {
            label: "Returns & Replacements",
            href: "returns-replacements"
        },
        {
            label: "Shipping Rates & Policies",
            href: "shipping-policies"
        },
        {
            label: "Refund and Returns Policy",
            href: "refund-olicy"
        },
        {
            label: "Privacy Policy",
            href: "privacy-policy"
        },
        {
            label: "Terms and Conditions",
            href: "terms-conditions"
        },
        {
            label: "Cookie Settings",
            href: "cookie-settings"
        },
        {
            label: "Help Center",
            href: "help-center"
        }
      ]
      const makeMoneywithUs = [
        {
            label: "Sell on Blonwe",
            href: "sell-blonwe"
        },
        {
            label: "Sell Your Services on Blonwe",
            href: "sell-services-blonwe"
        },
        {
            label: "Sell on Blonwe Business",
            href: "sell-blonwe-business"
        },
        {
            label: "Sell Your Apps on Blonwe",
            href: "sell-apps-lonwe"
        },
        {
            label: "Become an Affilate",
            href: "become-affilate"
        },
        {
            label: "Advertise Your Products",
            href: "advertise-products"
        },
        {
            label: "Sell-Publish with Us",
            href: "sell-publish-withus"
        },
        {
            label: "Become an Blonwe Vendor",
            href: "become-blonwe-vendor"
        }
      ]
      const getToKnowUs = [
        {
            label: "Careers for Blonwe",
            href: "careers-blonwe"
        },
        {
            label: "About Blonwe",
            href: "about-blonwe"
        },
        {
            label: "Inverstor Relations",
            href: "inverstor-relations"
        },
        {
            label: "Blonwe Devices",
            href: "blonwe-devices"
        },
        {
            label: "Customer reviews",
            href: "customer-reviews"
        },
        {
            label: "Social Responsibility",
            href: "social-responsibility"
        },
        {
            label: "Store Locations",
            href: "store-locations"
        }
      ]
      const selectBefore = (
        <Select
        defaultValue="all" 
        size="large"
        dropdownStyle={{width: 150,borderRadius:0,padding:0,margin:0}}
        style={{
          width: 120,
        }}
        options={searchOption}
      />
      );
    const mainMenu = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Shop",
            href: "/shop"
        },
        {
            label: "Tires & Wheels",
            href: "/tires-wheels"
        },
        {
            label: "Oils & Fluids",
            href: "/oils-fluids"
        },
        {
            label: "Blog",
            href: "/blog"
        },
        {
            label: "Best Discounts",
            href: "/best discounts"
        }
    ]
    
    const showDrawer = () => {
        setOpenAccountDrawer(true)
    };
    const onClose = () => {
      setOpenAccountDrawer(false);
    };

    // MARKUP
    const Menu = ({menu,className=null})=>{
        return menu.map((item,index)=>{
            return (<li key={index}>
                        <Link href={item.href} legacyBehavior>
                            <a className={className}>{item.label}</a>
                        </Link>
                    </li>)
        })
    }

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            {/* Start Header   */}
            <header>
                <div className="bg-[#132530]">
                    <div 
                        className="flex justify-between items-center h-[38px] 
                        px-[3%] text-[#FFFFFF] border-b border-slate-700"
                    >
                        <nav>
                            <ul className="flex gap-2 font-thin">
                                <Menu menu={top_menu} className="text-xs" />
                            </ul>
                        </nav>
                        <div className="flex items-center gap-3 font-thin text-xs">
                            <p>
                                You can contact us 24/7 
                                <Link href="/" legacyBehavior>
                                    <a className="text-[#FCC41E] font-semibold ml-1">
                                        0800 300-353
                                    </a>
                                </Link>
                                <span className="border border-slate-500 ml-2"></span>
                            </p> 

                            <Dropdown menu={{items}}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        English
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                            <Dropdown menu={{items}}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        USD
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                            <button className="bg-[#394851] px-[6px] rounded py-[4px]">
                                <SettingOutlined />
                            </button>Dark Theme
                        </div>
                    </div>

                    <div className="flex gap-7 items-center px-[3%] py-5 h-[48] text-[#FFFFFF]">
                        <div>
                            <Image 
                                src="/images/logo-auto-part.png" 
                                width={176} height={48} 
                                alt="logo-auto-part" 
                            />
                        </div>
                        <div className="flex gap-3 items-center">
                            <Button 
                                style={{color: "white"}} 
                                icon={<MenuOutlined /> }  
                                className="flex items-center px-2 h-[48px] py-[18px] rounded-none border-0 hover:bg-[#34444D]"
                            >
                                Menu
                            </Button>

                            <Search
                                addonBefore={selectBefore}
                                placeholder="Search for products"
                                allowClear 
                                size="large"
                                className="focus:outline-none p-1"
                                style={{
                                    width: 500,
                                    background: "white"
                                }}
                            />
                                                
                        </div>
                        <div className="flex items-center gap-5">
                            <Button 
                                type="text" 
                                style={{color: "white"}} 
                                icon={<UserOutlined style={{fontSize: 20}} />}
                                className="flex items-center text-white hover:text-white" 
                                onClick={showDrawer}
                            >
                                <div className="flex flex-col text-xs justify-center gap-0">
                                    <span className="text-[#717C82]">Signin</span>
                                    <span className="ml-2">Account</span>
                                </div>
                            </Button>
                            <Badge size="small" count={0} showZero color="#F85900">
                                <HeartOutlined style={{color: "white",fontSize:25,fontWeight:"bold"}} />
                            </Badge>

                            <Button type="text" className="flex text-white items-center gap-1" >
                                <Badge size="small" count={0} showZero style={{backgroundColor: '#F85900'}}>
                                    <ShoppingCartOutlined style={{color: "white",fontSize:25,fontWeight:"bold"}} />
                                </Badge>
                                <div className="flex flex-col text-xs justify-center gap-0">
                                    <span className="text-[#717C82]">Total</span>
                                    <span className="ml-2">$0.00</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="px-[3%] py-2 border-b">
                    <nav className="flex items-center justify-between">
                        <ul className="flex gap-4">
                            <Menu menu={mainMenu} className="font-semibold text-sm" />
                        </ul>
                        <Button 
                            type="text" 
                            className="text-red-600 font-semibold text-base text-center" 
                            style={{background: "transparent",color:"red"}}
                        >
                            <ThunderboltOutlined />
                            Buy Theme
                        </Button>
                    </nav>
                </div>
            </header>
            {/* End Header */}
            <section>
            
                {
                    children
                }
            </section>
        
            <footer className="bg-[#1B1F22] text-[#FFFFFF] py-[3%]">
                <div className="px-[3%] border-b border-b-gray-700">
                    <div className="grid grid-cols-4 gap-5 border-b pb-16 border-b-gray-700 ">
                        <div className="flex flex-col gap-5 border-r-2 border-r-gray-700 ">
                            <h1 className="text-sm font-semibold text-[#FFFFFF]">
                                Do You Need Help ?
                            </h1>
                            <div>
                                <p className="text-xs text-[#FFFFFF]">
                                    Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. 
                                    Pressa fåmoska.
                                </p>
                                <h1 
                                    className="font-semibold text-[#F85900] 
                                                text-2xl flex flex-col gap-0"
                                >
                                    0 800 300-353 
                                    <span className="text-[10px] font-semibold p-0 m-0 text-[#717C82]">
                                        Free from fixed and mobile phones in USA.
                                    </span>
                                </h1>
                                <h1><span className="text-[#717C82]">
                                    Email:</span> info@example.com
                                </h1>
                                <h1 className="flex flex-col font-semibold text-sm">
                                    <span className="text-[#717C82]  text-xs">
                                        Call Center hours
                                    </span> Mon-Sun 09:00-19:00
                                </h1>
                            </div>
                        </div>
                        <div className="px-5 flex flex-col gap-5">
                            <h1 className="text-sm font-semibold">Let Us Help You</h1>
                            <div className="flex flex-col gap-2">
                                {
                                    letUsHelpYou.map((item,index)=>{
                                        return (
                                            <Link href={item.href} legacyBehavior key={index}>
                                                <a className="text-xs hover:underline hover:underline-offset-4">
                                                    {item.label}
                                                </a>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="px-5 flex flex-col gap-5">
                            <h1 className="text-sm font-semibold">Make Money with Us</h1>
                            <div className="flex flex-col gap-2">
                                {
                                    makeMoneywithUs.map((item,index)=>{
                                        return (
                                            <Link href={item.href} key={index} legacyBehavior>
                                                <a className="text-xs hover:underline hover:underline-offset-4">
                                                    {item.label}
                                                </a>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                        <div className="px-5 flex flex-col gap-5">
                            <h1 className="text-sm font-semibold">Get to Know Us</h1>
                            <div className="flex flex-col gap-2">
                                {
                                    getToKnowUs.map((item,index)=>{
                                        return (
                                            <Link href={item.href} key={index}legacyBehavior>
                                                <a className="text-xs hover:underline hover:underline-offset-4">
                                                    {item.label}
                                                </a>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex justify-between py-5">
                        <div className="flex gap-2">
                            Follow us: 
                            <Button 
                                type="text" 
                                style={{color: "white"}} 
                                className="bg-gray-700 rounded-full"
                                icon={<i className='bx bxl-facebook' /> }
                            />
                            <Button 
                                type="text" 
                                style={{color: "white"}} 
                                className="bg-gray-700 rounded-full" 
                                icon={<YoutubeOutlined />} 
                            />
                            <Button 
                                type="text" 
                                style={{color: "white"}} 
                                className="bg-gray-700 rounded-full" 
                                icon={<WhatsAppOutlined />} 
                            />
                            <Button 
                                type="text" 
                                style={{color: "white"}} 
                                className="bg-gray-700 rounded-full" 
                                icon={<InstagramOutlined />} 
                            />
                            <Button 
                                type="text" 
                                style={{color: "white"}} 
                                className="bg-gray-700 rounded-full" 
                                icon={<DingtalkOutlined />} 
                            />
                        </div>
                    </div>
                </div>

                <div className="px-[3%] pt-[3%] flex justify-between items-center">
                    <p className="text-xs">
                        Copyright 2023 © Blonwe WordPress Theme. All right reserved. 
                        Powered by <span className="hover:underline hover:underline-offset-4">KLBTheme</span>.
                    </p>
                    <div className="flex gap-3 items-center">
                        <span>We accept:</span>
                        <Image src="/images/visa.png" width={40} height={40} alt="visa" />
                        <Image src="/images/paypal.png" width={40} height={40} alt="paypal" />
                        <Image src="/images/skrill.png" width={40} height={40} alt="skrill" />
                        <Image src="/images/klarna.png" width={40} height={40} alt="klarna" />
                    </div>
                </div>
            </footer>

            {/* Account Drawer */}
            <div className="fixed bottom-0 left-[8%] z-50 w-10/12 p-0">
                <Drawer 
                    placement="bottom" 
                    closable={false}
                    onClose={onClose}
                    open={openAccountDrawer}
                    key="bottom" 
                    getContainer={false}
                    height="100vh" 
                    bodyStyle={{padding:0}} 
                >
                    <div className="grid grid-cols-2 ">
                        <div>
                            <Image src="/images/auth-modal-image.jpg"
                                width={0}
                                height={0}
                                sizes="100vw" 
                                style={{ width: '100%', height: '100vh' }}
                            />
                        </div>
                        <div className="relative">
                            <Button 
                                type="text" 
                                size="large" 
                                icon={<CloseOutlined className="hover:text-orange-400" />} 
                                className="mt-2 mr-3 float-right hover:rotate-180" 
                                style={{background: "inherit"}} 
                                onClick={()=> setOpenAccountDrawer(false)} 
                            />
                            <div className=" clear-right px-[15%] flex flex-col gap-y-5">
                                <h1 className="text-center text-3xl font-meduim">Login</h1>
                                <Form layout="vertical" autoComplete="off">
                                    <div>
                                        <Item 
                                            name="email" 
                                            label="Username or email address"
                                            rules={[
                                                { required: true, message: "Email is required" }
                                                ]}
                                            >
                                            <Input size="large" style={{borderRadius:0}} />
                                        </Item>
                                        <Item 
                                            name="password" 
                                            label="Username or email address"
                                            rules={[
                                                { required: true, message: "Password is required" }
                                                ]}
                                            >
                                            <Input size="large" type="password" style={{borderRadius:0}} />
                                        </Item>
                                        <Item>
                                            <Button 
                                                htmlType="submit"
                                                size="large" 
                                                className="bg-orange-500 w-full border-0" 
                                                style={{borderRadius:0,color:"white"}}
                                            >Login</Button>
                                        </Item>
                                    </div>
                                </Form>
                                <a className="underline underline-offset-4 -mt-5 hover:text-black text-center">
                                    Lost your password?
                                </a>
                                <p className="text-xs text-center">
                                    By continuing, you accept the Website Regulations , 
                                    Regulations for the sale of alcoholic beverages and 
                                    the <a className="text-orange-500 hover:text-orange-500 
                                    font-semibold underline underline-offset-4">
                                    Privacy Policy</a>
                                </p>
                            </div>
                            <div className="absolute bottom-0 border-t border-t-gray-300 w-full pt-5">
                                <p className="text-center text-gray-400">
                                    You dont have an account yet? 
                                    <Link href="/signup" legacyBehavior>
                                        <a className="text-blue-500 font-semibold">Register Now</a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </div>
        </>
    )
}

export default LayoutEl;