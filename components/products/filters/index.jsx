import { Button, Input, Slider } from "antd"
import { useState } from "react"

const Filters = ()=>{
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [check,setCheck] = useState("none")
    const [checkIndex,setCheckIndex] = useState()
    const handleSliderChange = (value) => {
      setMinPrice(value[0]);
      setMaxPrice(value[1]);
    }
    const filterByColor = [
        {
            label: "Black",
            bgColor: "bg-black",
            totalItems: 3
        },
        {
            label: "Blue",
            bgColor: "bg-blue-800",
            totalItems: 4
        },
        {
            label: "Brown",
            bgColor: "bg-orange-500",
            totalItems: 8
        },
        {
            label: "Gray",
            bgColor: "bg-gray-500",
            totalItems: 6
        },
        {
            label: "Green",
            bgColor: "bg-green-500",
            totalItems: 10
        },
        {
            label: "Orange",
            bgColor: "bg-[#EFCA37]",
            totalItems: 2
        },
        {
            label: "Red",
            bgColor: "bg-red-500",
            totalItems: 1
        }
    ]
    const showCheckIcon = (index)=>{
        setCheckIndex(index)
    }
    const hideCheckIcon = ()=>{
        setCheckIndex(20)
    }

    return (
        <div className={`pr-3 border-r w-3/12`}>
            <p className="text-sm font-semibold">Filter by Color</p>
            <div>
                {
                    filterByColor.map((item,index)=>(
                        <div 
                            key={index}
                            className="flex items-center justify-between" 
                            onMouseOver={()=> showCheckIcon(index)} 
                            onMouseLeave={hideCheckIcon}
                        >
                            <div className="flex items-center">
                                <div 
                                    className={`${item.bgColor} rounded-full cursor-default w-[16px] h-[16px] flex items-center`}
                                >
                                    {
                                        index == checkIndex ? <i className='bx bx-check text-white'/> : null
                                    }
                                </div>
                                <Button 
                                    type="text" 
                                    className="opacity-70" 
                                    style={{background: "inherit"}}
                                >{item.label}</Button>
                            </div>
                            <p className="opacity-70">({item.totalItems})</p>
                        </div>
                    ))
                }
            </div>
            <div>
                <p className="text-sm font-semibold mt-5">Filter by price</p>
                <div>
                    <div className="flex gap-3">
                        <div>
                            <span className="text-xs opacity-70">Min Price</span>
                            <Input 
                                value={minPrice}
                                size="large" 
                                placeholder="Min Price"
                            />
                        </div>
                        <div>
                            <span className="text-xs opacity-70">Price</span>
                            <Input 
                                value={maxPrice}
                                size="large" 
                                placeholder="Max Price" 
                            />
                        </div>
                    </div>
                    <Slider
                        range={{
                        draggableTrack: false,
                        }}
                        max={1000} 
                        onChange={handleSliderChange}
                        defaultValue={[0, 1000]} 
                    />
                    <div className="flex items-center justify-between">
                        <span className="text-xs opacity-70">Price: $100 — $270</span>
                        <Button 
                            className="bg-gray-200 border-0" 
                            style={{color: "black"}}
                        >FILTER</Button>
                    </div>
                    <p className="text-sm font-semibold mt-5">Brands</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div 
                                className="bg-gray-200 rounded-sm cursor-default w-[16px] h-[16px]"
                            ></div>
                            <Button 
                                type="text" 
                                className="opacity-70" 
                                style={{background: "inherit"}}
                            >VISION</Button>
                        </div>
                        <p className="opacity-70">(1)</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div 
                                className="bg-gray-200 rounded-sm cursor-default w-[16px] h-[16px]"
                            ></div>
                            <Button 
                                type="text" 
                                className="opacity-70" 
                                style={{background: "inherit"}}
                            >VOGUE</Button>
                        </div>
                        <p className="opacity-70">(3)</p>
                    </div>

                    <p className="text-sm font-semibold mt-5">Product Status</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div 
                                className="bg-gray-200 rounded-sm cursor-default w-[16px] h-[16px]"
                            ></div>
                            <Button 
                                type="text" 
                                className="opacity-70" 
                                style={{background: "inherit"}}
                            >In Stock</Button>
                        </div>
                        <p className="opacity-70">(1)</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div 
                                className="bg-gray-200 rounded-sm cursor-default w-[16px] h-[16px]"
                            ></div>
                            <Button 
                                type="text" 
                                className="opacity-70" 
                                style={{background: "inherit"}}
                            >On Sale</Button>
                        </div>
                        <p className="opacity-70">(3)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters