import Image from "next/image";
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from "antd";

const ImageSlider = ({data})=>{
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
            {
                data.map((item,index)=>{
                    return (
                        <SwiperSlide key={index}>
                            <Image 
                                src={item.src} 
                                width={779} height={390} 
                                alt="slider-image"
                            />
                            <div 
                                className=" w-full absolute top-16 left-16 h-full "
                            >  
                                <div className="flex flex-col gap-4">
                                    <div>
                                    <span className={`${item.titleColor}`}>
                                        Exclusive Offers &#160;&#160;&#160;
                                    </span>
                                    <Button type="primary" danger className="font-bold w-fit">
                                    <i className='bx bxs-left-arrow text-sm absolute top-2 -left-[11px] text-[#FF4D4F]' />
                                        {item.discount}
                                    </Button>
                                    </div>
                                <h1 className={`${item.titleColor} text-5xl font-semibold`}>
                                    {item.titleText}
                                </h1>
                                <p className={`${item.titleColor} opacity-50`}>
                                    {item.aboutOffer}
                                </p>
                                <Button 
                                    type="default" 
                                    className="bg-[#F85900] w-fit rounded-3xl border-0 text-white flex items-center px-4"
                                >
                                    Shop Now&#160;&#160;
                                    <i className='bx bx-arrow-back bx-flip-horizontal'></i>
                                </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </>
    )
}

export default ImageSlider