import Image from "next/image"
import LayoutEl from "../shared/layout"
import Filters from "./filters"
import RelatedProducts from "./related-products"
import { Button, Divider } from "antd"
import {
    AppstoreOutlined,
    UnorderedListOutlined
} from "@ant-design/icons"

const Products = ()=>{
    const SortOption = [
        {
            label: "Default Sort",
            value: "defaultSsort"
        },
        {
            label: "DeSort By Popularity",
            value: "SortByPopularity"
        },
        {
            label: "Sort by average rating",
            value: "defaultSort"
        },
        {
            label: "Sort by latest",
            value: "sortByLatest"
        },
        {
            label: "Sort by Price: low to high",
            value: "sortByPriceLowToHigh"
        },
        {
            label: "Sort by Price: high to low",
            value: "sortByPricehighToLow"
        }
    ]
    
    return (
        <LayoutEl>
            <div className="relative">
                <Image 
                    src="/images/products-images/banner-67.jpg" 
                    width={1200} 
                    height={348} 
                    alt="banner" 
                />
                <div className="absolute top-[20%] left-[25%] text-white text-center flex flex-col gap-3">
                    <p className="">Contact Us For Blonwe</p>
                    <h1 className="text-5xl font-semibold">Our Shop</h1>
                    <p className="text-sm font-medium">
                        Contact us for all your questions and opinions, or you can solve your problems<br />
                        in a shorter time with our contact offices.
                    </p>
                </div>
            </div>
            <div className="mx-[3%] py-[3%]">
                <div className="flex justify-between border-b">
                    <p className="text-xs opacity-70">Showing all 14 results</p>
                    <div className="flex items-center gap-3">
                    <div className="flex  items-center">
                        <p className="text-xs opacity-70">Sort: </p>
                        <select className="w-[120px] focus:outline-none">
                            {
                                SortOption.map((item,index)=>(
                                    <option value={item.value} key={index}>{item.label}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="flex  items-center">
                        <p className="text-xs opacity-70">Sort: </p>
                        <select className="w-[120px] focus:outline-none">
                            {
                                SortOption.map((item,index)=>(
                                    <option value={item.value} key={index}>{item.label}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="flex gap-2">
                        <Button type="text" icon={<AppstoreOutlined />} />
                        <Button type="text" icon={<UnorderedListOutlined />} />
                    </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 py-3">
                    <Filters />
                    <RelatedProducts />
                </div>
            </div>
        </LayoutEl>
    )
}

export default Products