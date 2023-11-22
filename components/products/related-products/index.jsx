import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "antd"
import {
    HeartOutlined,
    ShoppingCartOutlined,
    FullscreenOutlined
} from "@ant-design/icons"

const RelatedProducts = ({data})=>{
    // CONST
    const [iconIndex,setIconIndex] = useState(false)
    const productsDetaeil = [
        {
            title: "10.1 CD/DVD Multimedia Receiver with Apple CarPlay and Android Auto CAR8000",
            src: "/images/products-images/image-1-13-300x300.png",
            discount: "3%",
            originalPrice: "$369.00",
            discountPrice: "$350.0",
            stock: "In Stock"
        },
        {
            title: "Alpharex® Sequential Tail Lights",
            src: "/images/products-images/image-1-300x300.png",
            discount: "6%",
            originalPrice: "$340.00",
            discountPrice: "$300.0",
            stock: "In Stock"
        },
        {
            title: "Anzo® Halo Headlights",
            src: "/images/products-images/image-1-1-300x300.png",
            discount: "5%",
            originalPrice: "$340.00",
            discountPrice: "$320.0",
            stock: "In Stock"
        },
        {
            title: "Anzo® Fiber Optic LED Tail Lights",
            src: "/images/products-images/image-1-2-300x300.png",
            discount: "5%",
            originalPrice: "$340.00",
            discountPrice: "$320.0",
            stock: "In Stock"
        },
        {
            title: "Anzo® Fiber Optic LED Tail Lights",
            src: "/images/products-images/image-1-3-300x300.png",
            discount: "5%",
            originalPrice: "$340.00",
            discountPrice: "$320.0",
            stock: "In Stock"
        },
        {
            title: "Anzo® Fiber Optic LED Tail Lights",
            src: "/images/products-images/image-1-6-300x300.png",
            discount: "5%",
            originalPrice: "$340.00",
            discountPrice: "$320.0",
            stock: "In Stock"
        },
        {
            title: "Anzo® Fiber Optic LED Tail Lights",
            src: "/images/products-images/image-1-11-300x300.png",
            discount: "5%",
            originalPrice: "$340.00",
            discountPrice: "$320.0",
            stock: "In Stock"
        },
        {
            title: "Anzo® Fiber Optic LED Tail Lights",
            src: "/images/products-images/image-1-12-300x300.png",
            discount: "5%",
            originalPrice: "$340.00",
            discountPrice: "$320.0",
            stock: "In Stock"
        },
        {
            title: "Anzo® Fiber Optic LED Tail Lights",
            src: "/images/products-images/image-1-16-300x300.png",
            discount: "5%",
            originalPrice: "$340.00",
            discountPrice: "$320.0",
            stock: "In Stock"
        },
        {
            title: "Anzo® Fiber Optic LED Tail Lights",
            src: "/images/products-images/image-1-18-300x300.png",
            discount: "5%",
            originalPrice: "$340.00",
            discountPrice: "$320.0",
            stock: "In Stock"
        },
        {
            title: "Anzo® Fiber Optic LED Tail Lights",
            src: "/images/products-images/image-2-19-300x300.png",
            discount: "5%",
            originalPrice: "$340.00",
            discountPrice: "$320.0",
            stock: "Out of Stock"
        },
        {
            title: "Anzo® Fiber Optic LED Tail Lights",
            src: "/images/products-images/image-1-26-300x300.png",
            discount: "5%",
            originalPrice: "$340.00",
            discountPrice: "$320.0",
            stock: "Only 5 Items"
        },
        {
            title: "Anzo® Fiber Optic LED Tail Lights",
            src: "/images/products-images/image-1-38-300x300.png",
            discount: "5%",
            originalPrice: "$340.00",
            discountPrice: "$320.0",
            stock: "In Stock"
        },
        {
            title: "Anzo® Fiber Optic LED Tail Lights",
            src: "/images/products-images/image-1-39-300x300.png",
            discount: "5%",
            originalPrice: "$340.00",
            discountPrice: "$320.0",
            stock: "Out of Stock"
        }
        
    ]

    // FUNCTIONS
    const showIcon = (index)=>{
        setIconIndex(index)
    }
    const hideIcon = ()=>{
        setIconIndex(-1)
    }
    return (
        <div className="w-9/12">
            <div className="grid grid-cols-4 gap-2 px-5">
                {
                    data.map((item,index)=>(
                        <div 
                        key={index}
                            className="relative flex flex-col gap-y-3"  
                            onMouseEnter={()=> showIcon(index)}
                            onMouseLeave={()=> hideIcon()}
                        >
                            <Link 
                                href={
                                    "product/"+item.title
                                    .toLocaleLowerCase()
                                    .split(" ").join("-")
                                    .split("/")
                                    .join("-")}
                                >
                                <Image 
                                    src={process.env.NEXT_PUBLIC_AWS_S3_BUCKET_URL+item.image} 
                                    width={300} 
                                    height={300} 
                                    alt="image-1-13-300x300" 
                                />
                            </Link>
                            <Button
                                type="primary" 
                                danger 
                                className="absolute top-0 text-xs h-5 px-1 flex items-center" 
                                style={{borderRadius: 3}}
                            >10%</Button>
                            <Button 
                                shape="circle" 
                                size="middle"
                                icon={<HeartOutlined />}
                                className="absolute top-1 bg-white border-0 right-3" 
                                style={{color: "black"}}
                            />
                            <Link 
                                href=
                                {
                                    "product/"+item.title
                                    .toLocaleLowerCase()
                                    .split(" ").join("-")
                                    .split("/")
                                    .join("-")
                                }
                            >
                                <p className="text-xs font-semibold hover:underline cursor-pointer">
                                    {item.title}
                                </p>
                            </Link>
                            <div className="flex items-center">
                                <i className='bx bx-star text-yellow-300'></i>
                                <i className='bx bx-star text-yellow-300'></i>
                                <i className='bx bx-star text-yellow-300'></i>
                                <i className='bx bx-star text-yellow-300'></i>
                                <i className='bx bx-star text-yellow-300'></i>
                                <span className="ml-1 text-xs font-medium opacity-70">3</span>
                            </div>
                            <div className="flex justify-between pr-2">
                                <div>
                                    <p className="text-sm font-medium opacity-70 line-through">
                                        ${item.price}
                                    </p>
                                    <p className="font-medium text-orange-700">
                                        ${item.price}
                                    </p>
                                </div>
                                <Button 
                                    icon={<ShoppingCartOutlined />} 
                                    style={{color: "white"}}
                                    className="bg-[#F96919] border-0 flex items-center justify-center"
                                />
                            </div>
                            <span className="text-xs font-medium text-[#22C55E]">
                                {item.quantity > 0 ? "In Stock" : "Out Of Stock"}
                            </span>
                            {
                                iconIndex == index ? 
                                <div 
                                    className="absolute right-3 top-10 
                                    animate__animated animate__slideInRight animate__faster">
                                    <Button 
                                        shape="circle" 
                                        size="middle"
                                        icon={<FullscreenOutlined />}
                                        className="bg-white border-0" 
                                        style={{color: "black"}}
                                    />
                                </div> : null
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProducts