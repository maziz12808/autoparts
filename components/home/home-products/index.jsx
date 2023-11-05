import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,EffectFade,Navigation } from 'swiper/modules';

const HomeProducts = ()=>{
    const product = [
        {
            title: "Body Parts",
            src: "/images/body.png",
            href: "product"
        },
        {
            title: "Brake Disks & pads",
            src: "/images/brakes.png",
            href: "/product"
        },
        {
            title: "Engin Parts",
            src: "/images/transmission.png",
            href: "product"
        },
        {
            title: "Filters",
            src: "/images/filters.png",
            href: "product"
        },
        {
            title: "Engin Parts",
            src: "/images/transmission.png",
            href: "product"
        },
        {
            title: "Filters",
            src: "/images/filters.png",
            href: "product"
        }
    ]
    return (
         <Swiper
            slidesPerView={1}
            spaceBetween={10} 
            navigation={true}
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
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
        >
            {
                product.map((item,index)=>(
                    <SwiperSlide>
                    <div className="text-center mt-3 select-none px-10" key={index}>
                        <Link href={item.href}>
                            <Image 
                                src={item.src} 
                                width={200} 
                                height={200} 
                                alt="body" 
                                className="mx-auto" 
                            />
                            <h1 className="text-sm font-medium hover:text-orange-500">{item.title}</h1>
                        </Link>
                    </div>
                    </SwiperSlide>
                ))
            }
             </Swiper>
    )
}

export default HomeProducts