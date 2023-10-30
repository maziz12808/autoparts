import {
    DollarOutlined,
    CarOutlined
} from "@ant-design/icons"
import {
    Select,
    Space,
    Button
} from "antd"

import ImageSilder from "../image-silder"
const Hero = ()=>{
    const makeoptions = [
        {
            label: "Audi",
            value: "audi",
        },
        {
            label: "BMV",
            value: "bmw",
        },
        {
            label: "Cheverlet",
            value: "cheverlet",
        },
        {
            label: "Dodge",
            value: "dodge",
        }, {
            label: "Fait",
            value: "fait",
        },
        {
            label: "Ford",
            value: "ford",
        },
        {
            label: "Honda",
            value: "honda",
        }
    ];
    const options1 = [
        {
            label: "Select Make First",
            value: "audi",
        }
    ];
    const yearOptions = [];
    for(var i=1; i < 34; i++)
    {
        yearOptions.push({
            label: (1990+i).toString(),
            value: (1990+i).toString()
        })
    }
   
    const feature = [
        {
            icon: <DollarOutlined className="mr-1 text-red-500" />,
            text: "Installments Without Card"
        },
        {
            icon: <DollarOutlined  className="mr-1 text-red-500"/>,
            text: "Free pickup in stores"
        },
        {
            icon: <CarOutlined className="mr-1 text-red-500" />,
            text: "Free pickup in stores"
        },
        {
            icon: <DollarOutlined className="mr-1 text-red-500"/>,
            text: "Track your order"
        },
        {
            icon: <DollarOutlined className="mr-1 text-red-500" />,
            text: "100% Customer satisfaction rate text-red-500"
        }
    ]
    const imageSilder = [
        {
            src: "/images/slider-32.jpg",
            discount: "-10% 0ff",
            aboutOffer: "Limited time offer for new customer",
            titleColor: "text-black",
            titleText: <span>We love cars, <br /> also passionate <br /> about their parts</span>
        },
        {
            src: "/images/slider-33.jpg",
            discount: "-20% 0ff",
            aboutOffer: "Limited time offer for new customer",
            titleColor: "text-white",
            titleText: <span>Taking your car's, <br /> performence to <br /> the next level</span>
        },
        {
            src: "/images/slider-34.jpg",
            discount: "-30% 0ff",
            aboutOffer: "Limited time offer for new customer",
            titleColor: "text-white",
            titleText: <span>Providing high-<br />quality car parts<br />for any brands</span>
        }
    ]
    // Markup
    
    return (
        <>
            <div className="flex gap-8 px-[3%] py-[1.5%]">
                {
                    feature.map((item,index)=>{
                        return <p className="text-sm text-slate-600">{item.icon }{item.text }</p>
                    })
                }
            </div>
            <div className="grid grid-cols-3 gap-7 p-2 border-b pb-7 border-b-gray-400">
                <div className="border-2 rounded border-[#F85900] p-6">
                    <h1 className="text-lg font-semibold">Find The Right Parts Faster</h1>
                    <span className="text-xs text-neutral-500">
                        Having the right automotive parts and car <br />
                        accessories will help you to boost your travel <br />
                        comfort and go on the long-distance journey <br />
                        comfortably that you have been planning.
                    </span>
                    <Space
                        style={{
                        width: '100%',
                        }}
                        direction="vertical"
                    >
                        <Select
                            allowClear 
                            listHeight={200} 
                            className="rounded-none mt-2"
                            popupClassName="border border-gray-200 rounded-none p-0 hover:text-red-100"
                            style={{
                                width: '100%',
                            }}
                            placeholder="Please select"
                            options={makeoptions}
                        />
                        <Select
                            allowClear 
                            listHeight={200} 
                            disabled
                            popupClassName="border border-gray-200 rounded-none p-0 hover:text-red-100"
                            style={{
                                width: '100%',
                            }}
                            className="bg-gray-100 rounded-none border-0"
                            placeholder="Please select"
                            options={options1}
                        />
                         <Select
                            allowClear 
                            listHeight={200} 
                            popupClassName="border border-gray-200 rounded-none p-0 hover:text-red-100"
                            style={{
                                width: '100%',
                            }}
                            className="bg-gray-100 rounded-none border-0"
                            placeholder="Please select"
                            options={yearOptions}
                        />
                    </Space>
                    <Button 
                        size="large" 
                        style={{
                            color: "whitesmoke",
                            borderRadius: 0
                        }}
                        className="mt-2 bg-orange-500 w-full rounded-none border-0 opacity-60"
                    >
                        Find Auto Parts
                    </Button>
                </div>
                <div className="col-span-2">
                    <ImageSilder data={imageSilder}/>
                </div>
            </div>
        </>
    )
}

export default Hero