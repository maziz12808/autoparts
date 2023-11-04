import { Button, Input, Slider } from "antd"
const Filters = ()=>{
    return (
        <div className="px-3 border-r">
            <p className="text-sm font-semibold">Filter by Color</p>
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div 
                            className="bg-black rounded-full cursor-default w-[16px] h-[16px]"
                        ></div>
                        <Button 
                            type="text" 
                            className="opacity-70" 
                            style={{background: "inherit"}}
                        >Black</Button>
                    </div>
                    <p className="opacity-70">(3)</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div 
                            className="bg-blue-800 rounded-full cursor-default w-[16px] h-[16px]"
                        ></div>
                        <Button 
                            type="text" 
                            className="opacity-70" 
                            style={{background: "inherit"}}
                        >Blue</Button>
                    </div>
                    <p className="opacity-70">(3)</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div 
                            className="bg-orange-500 rounded-full cursor-default w-[16px] h-[16px]"
                        ></div>
                        <Button 
                            type="text" 
                            className="opacity-70" 
                            style={{background: "inherit"}}
                        >Black</Button>
                    </div>
                    <p className="opacity-70">(3)</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div 
                            className="bg-gray-500 rounded-full cursor-default w-[16px] h-[16px]"
                        ></div>
                        <Button 
                            type="text" 
                            className="opacity-70" 
                            style={{background: "inherit"}}
                        >Gray</Button>
                    </div>
                    <p className="opacity-70">(3)</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div 
                            className="bg-green-500 rounded-full cursor-default w-[16px] h-[16px]"
                        ></div>
                        <Button 
                            type="text" 
                            className="opacity-70" 
                            style={{background: "inherit"}}
                        >Green</Button>
                    </div>
                    <p className="opacity-70">(3)</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div 
                            className="bg-[#EFCA37] rounded-full cursor-default w-[16px] h-[16px]"
                        ></div>
                        <Button 
                            type="text" 
                            className="opacity-70" 
                            style={{background: "inherit"}}
                        >Orange</Button>
                    </div>
                    <p className="opacity-70">(3)</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div 
                            className="bg-red-500 rounded-full cursor-default w-[16px] h-[16px]"
                        ></div>
                        <Button 
                            type="text" 
                            className="opacity-70" 
                            style={{background: "inherit"}}
                        >Red</Button>
                    </div>
                    <p className="opacity-70">(3)</p>
                </div>
            </div>
            <div>
                <p className="text-sm font-semibold">Filter by price</p>
                <div>
                    <div className="flex gap-3">
                        <div>
                            <span className="text-xs opacity-70">Min Price</span>
                            <Input size="large" placeholder="Min Price"/>
                        </div>
                        <div>
                            <span className="text-xs opacity-70">Price</span>
                            <Input size="large" placeholder="Max Price" />
                        </div>
                    </div>
                    <Slider
                        range={{
                        draggableTrack: true,
                        }}
                        defaultValue={[20, 50]} 
                    />
                    <div className="flex items-center justify-between">
                        <span className="text-xs opacity-70">Price: $100 — $270</span>
                        <Button 
                            className="bg-gray-200 border-0" 
                            style={{color: "black"}}
                        >FILTER</Button>
                    </div>
                    <p className="text-sm font-semibold">Brands</p>
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

                    <p className="text-sm font-semibold">Product Status</p>
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