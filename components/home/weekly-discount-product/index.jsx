import Image from "next/image"
import {Button, Divider} from "antd"
import ProductEl from "../products-list"

const WeeklyDiscountProduct = ()=>{
    const productData = [
        {
            src: "/images/banner-62.jpg",
            discount: "Weekend Discount",
            productTitle: "Tires & Weels",
            discountDuration: "Only for this week...",
            from: "from",
            price: "$ 599.99"
        },
        {
            src: "/images/banner-62.jpg",
            discount: "Weekend Discount",
            productTitle: "Tires & Weels",
            discountDuration: "Only for this week...",
            from: "from",
            price: "$ 599.99"
        },
        ,
        {
            src: "/images/banner-62.jpg",
            discount: "Weekend Discount",
            productTitle: "Tires & Weels",
            discountDuration: "Only for this week...",
            from: "from",
            price: "$ 599.99"
        }
    ]
    
    return (
        <>
            <div className="py-7 flex gap-5">
                {
                    productData.map((item,index)=>{
                        return (
                                <div className="relative w-4/12">
                                    <Image src={item.src} width={374} height={198} className=" rounded-xl" />
                                    <div className="absolute top-0 left-0 p-7">
                                        <h1 className="mb-2">{item.discount}</h1>
                                        <h1 className="font-bold text-2xl mt-2">{item.productTitle}</h1>
                                        <p className="text-[13px] opacity-60 mb-3">{item.discountDuration}</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-[13px] opacity-60">{item.from}</p>
                                            <h1 className="font-bold text-2xl">{ item.price }</h1>
                                        </div>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
            <div>
                <div className="flex justify-between">
                    <div className="flex">
                        <h1 className="text-xl mr-7">Don't miss this week's sales</h1>
                        <Button 
                            type="default" 
                            className="bg-red-500 p-0 px-2 text-[10px] font-bold text-white mr-1"
                        >73 d</Button>
                        <Button 
                            type="default" 
                            className="bg-red-500 p-0 px-2 text-[10px] font-bold text-white mr-1"
                        >73 h</Button>
                        <Button 
                            type="default" 
                            className="bg-red-500 p-0 px-2 text-[10px] font-bold text-white mr-1"
                        >73 m</Button>
                        <span>:</span>
                        <Button 
                            type="default" 
                            className="bg-red-500 p-0 px-3 text-[10px] font-bold text-white ml-1"
                        >
                            12
                         s</Button>
                    </div>
                    <Button 
                        type="link"
                        classNames="hover:text-red-600"
                        style={{color: "black"}}
                    >
                        See All
                    </Button>
                </div>
            </div>
            <Divider />
            <ProductEl />
        </>

    )
}

export default WeeklyDiscountProduct