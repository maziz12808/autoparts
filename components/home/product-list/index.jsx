import Image from "next/image"
import Link from "next/link"
import { Button } from "antd"
import {
    HeartOutlined,
    ShoppingCartOutlined,
    FullscreenOutlined
} from "@ant-design/icons"
import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


const ProductsEl = ()=>{
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
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                {
                    productsDetaeil.map((item,index)=>(
                        <SwiperSlide>
                            <div 
                                className="relative flex flex-col gap-y-2 select-none pr-9" key={index} 
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
                                        src={item.src} 
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
                                >{item.discount}</Button>
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
                                        <p className="text-sm font-medium opacity-30 line-through">
                                            {item.originalPrice}
                                        </p>
                                        <p className="font-medium text-orange-700">
                                            {item.discountPrice}
                                        </p>
                                    </div>
                                    <Button 
                                        icon={<ShoppingCartOutlined />} 
                                        style={{color: "white"}}
                                        className="bg-[#F96919] border-0 flex items-center justify-center"
                                    />
                                </div>
                                <div className="bg-gray-300 w-full h-[7px] rounded-3xl">
                                    <div className="bg-orange-500 w-[30%] h-[7px] rounded-3xl"></div>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold flex justify-between">
                                        <div>
                                            <span className="opacity-30">Availabel:</span>
                                            <span>13</span>
                                        </div>
                                        <div>
                                            <span className="opacity-30">Sold:</span>
                                            <span>11</span>
                                        </div>
                                    </div>
                                    <span className="opacity-60 text-sm">Time remaining until the end of the offer.</span>
                                </div>
                                <p className="w-fit p-1 rounded-full text-xs font-semibold border opacity-70">
                                    <i class='bx bx-package mr-1'></i>
                                    Today Shiping
                                </p>
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
                        </SwiperSlide>
                    ))
                }
                </Swiper>
    )
}

export default ProductsEl