import LayoutEl from "@/components/shared/layout"
import RelatedProducts from "../related-products";
import Image from "next/image"
import { useRef } from "react";
import { 
    Button, 
    Divider, 
    Input,
    Tabs,
    Avatar,
    Form
} from 'antd';
import { 
    MinusOutlined,
    PlusOutlined,
    ShoppingCartOutlined,
    TwitterOutlined
} from "@ant-design/icons"
const { Item } = Form;


const SlugEL = ({title})=>{
    const inputEl = useRef();

    const Reviews = ()=>{
        return (
            <>
                <div className="w-8/12">
                    <h1 className="capitalize font-semibold text-lg mb-4">
                        3 reviews for {title.split("-").join(" ")}
                    </h1>
                    <div className="grid grid-cols-2">
                        <div className="flex gap-x-5 items-center">
                            <div>
                                <h1 className="text-6xl">4.00</h1>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-xl">
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bx-star text-yellow-300' />
                                </div>
                                <div>
                                    <span className="text-sm opacity-70">Average of </span>
                                    <span className="text-sm font-semibold">3 reviews</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                                <i className='bx bxs-star text-yellow-300' />
                                <span className="text-sm">5</span>
                                <div className="w-10/12 h-2 rounded-3xl bg-gray-100">
                                    <div className="w-[30%] h-2 rounded-3xl bg-yellow-300"></div>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i className='bx bxs-star text-yellow-300' />
                                <span className="text-sm">4</span>
                                <div className="w-10/12 h-2 rounded-3xl bg-gray-100">
                                    <div className="w-[40%] h-2 rounded-3xl bg-yellow-300"></div>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i className='bx bxs-star text-yellow-300' />
                                <span className="text-sm">3</span>
                                <div className="w-10/12 h-2 rounded-3xl bg-gray-100">
                                    <div className="w-[50%] h-2 rounded-3xl bg-yellow-300"></div>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i className='bx bxs-star text-yellow-300' />
                                <span className="text-sm">2</span>
                                <div className="w-10/12 h-2 rounded-3xl bg-gray-100">
                                    <div className="w-[60%] h-2 rounded-3xl bg-yellow-300"></div>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i className='bx bxs-star text-yellow-300' />
                                <span className="text-sm">1</span>
                                <div className="w-10/12 h-2 rounded-3xl bg-gray-100">
                                    <div className="w-[80%] h-2 rounded-3xl bg-yellow-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3 items-start border-b pb-2">
                            <div>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </div>
                            <div>
                                <div>
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                </div>
                                <p className="opacity-70">sinan – August 2, 2023</p>
                                <p className="opacity-90">Commodi perspiciatis unde omnis iste natus aliquam sit voluptatem exercitationem doloremque laudantium.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start border-b pb-2">
                            <div>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </div>
                            <div>
                                <div>
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                </div>
                                <p className="opacity-70">sinan – August 2, 2023</p>
                                <p className="opacity-90">Commodi perspiciatis unde omnis iste natus aliquam sit voluptatem exercitationem doloremque laudantium.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start border-b pb-2">
                            <div>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </div>
                            <div>
                                <div>
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                </div>
                                <p className="opacity-70">sinan – August 2, 2023</p>
                                <p className="opacity-90">Commodi perspiciatis unde omnis iste natus aliquam sit voluptatem exercitationem doloremque laudantium.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start border-b pb-2">
                            <div>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </div>
                            <div>
                                <div>
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                </div>
                                <p className="opacity-70">sinan – August 2, 2023</p>
                                <p className="opacity-90">Commodi perspiciatis unde omnis iste natus aliquam sit voluptatem exercitationem doloremque laudantium.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start border-b pb-2">
                            <div>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </div>
                            <div>
                                <div>
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                </div>
                                <p className="opacity-70">sinan – August 2, 2023</p>
                                <p className="opacity-90">Commodi perspiciatis unde omnis iste natus aliquam sit voluptatem exercitationem doloremque laudantium.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start border-b pb-2">
                            <div>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </div>
                            <div>
                                <div>
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                    <i className='bx bxs-star text-yellow-300' />
                                </div>
                                <p className="opacity-70">sinan – August 2, 2023</p>
                                <p className="opacity-90">Commodi perspiciatis unde omnis iste natus aliquam sit voluptatem exercitationem doloremque laudantium.</p>
                            </div>
                        </div>
                    </div>

                    <div className="py-5 flex flex-col gap-3">
                        <h1 className="text-lg font-semibold">Add a Review</h1>
                        <p className="opacity-70">
                            Your email address will not be published. Required fields are marked *
                        </p>
                    <div>
                        <p className="opacity-70">Your rating *</p>
                        <div className="flex gap-3">
                            <div>
                                <i className='bx bx-star text-yellow-300' />
                            </div>
                            <div>
                                <i className='bx bx-star text-yellow-300' />
                                <i className='bx bx-star text-yellow-300' />
                            </div>
                            <div>
                                <i className='bx bx-star text-yellow-300' />
                                <i className='bx bx-star text-yellow-300' />
                                <i className='bx bx-star text-yellow-300' />
                            </div>
                            <div>
                                <i className='bx bx-star text-yellow-300' />
                                <i className='bx bx-star text-yellow-300' />
                                <i className='bx bx-star text-yellow-300' />
                                <i className='bx bx-star text-yellow-300' />
                            </div>
                            <div>
                                <i className='bx bx-star text-yellow-300' />
                                <i className='bx bx-star text-yellow-300' />
                                <i className='bx bx-star text-yellow-300' />
                                <i className='bx bx-star text-yellow-300' />
                                <i className='bx bx-star text-yellow-300' />
                            </div>
                        </div>
                        <Form layout="vertical">
                            <Item label="Your review *" name="review">
                                <Input.TextArea rows={4} className="bg-gray-100 border-0" />
                            </Item>
                            <div className="grid grid-cols-2 gap-3">
                                <Item label="Your review *" name="name">
                                    <Input className="bg-gray-100 border-0" size="large" />
                                </Item>
                                <Item label="Your review *" name="name">
                                    <Input className="bg-gray-100 border-0" size="large" />
                                </Item>
                            </div>
                            <Button 
                                size="large"
                                className="bg-orange-500 border-0 text-white font-semibold" 
                                style={{borderRadius: 0}}
                            >Submit</Button>
                        </Form>
                    </div>
                    </div>
                </div>
            </>
        )
    }
    const items = [
        {
          key: '1',
          label: <h1 className="font-semibold">Description</h1>,
          children: 
          <div className="flex flex-col gap-5">
            <p className="text-justify text-sm opacity-70">
                Quisque varius diam vel metus mattis, id aliquam diam rhoncus. 
                Proin vitae magna in dui finibus malesuada et at nulla. Morbi 
                elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce 
                fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies 
                sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est 
                in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. 
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
            </p>
            <p className="text-justify text-sm opacity-70">
                Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat 
                auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim 
                viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis 
                dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, 
                ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur 
                laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim 
                ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem 
                orci convallis quam, sit amet consequat nulla felis pharetra lacus. 
                Duis semper erat mauris, sed egestas purus commodo vel.
            </p>
          </div>,
        },
        {
          key: '2',
          label: <h1 className="font-semibold opacity-50">Reviews (3)</h1>,
          children: <Reviews />,
        }
      ];
    const decrementValue = ()=>{
        inputEl.current.input.value = 
        inputEl.current.input.value > 1 ? 
        (Number(inputEl.current.input.value) - 1) :  1
    }
    const incrementValue = ()=>{
        inputEl.current.input.value = inputEl.current.input.value < 10 ? (Number(inputEl.current.input.value) + 1) :  10
    }
    
    return (
        <LayoutEl>
            <div className="px-[3%] py-[1%] flex flex-col gap-12">
                
                <div className="flex flex-col gap-3">
                    <h1 className="capitalize font-semibold text-3xl">{title.split("-").join(" ")}</h1>
                    <div className="flex items-center border-b pb-2">
                        <i className='bx bx-star text-yellow-300'></i>
                        <i className='bx bx-star text-yellow-300'></i>
                        <i className='bx bx-star text-yellow-300'></i>
                        <i className='bx bx-star text-yellow-300'></i>
                        <i className='bx bx-star text-yellow-300'></i>
                        <span className="ml-1 text-xs font-medium opacity-70">3 reviews</span>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="px-2 py-2">
                            <Image 
                            width={380} 
                            height={380}
                            src="/images/products-images/image-1-13-300x300.png" 
                        />
                        </div>
                        <div className="px-2 py-2">
                            <div className="flex flex-col gap-3">
                                <span className="bg-green-50 w-fit text-green-500 p-1 text-sm font-medium">
                                    In Stock
                                </span>
                                <p className="text-sm opacity-60 text-justify tracking-tighter leading-5">
                                    Fusce sapien urna, tristique non sapien nec, 
                                    rutrum fringilla eros. Etiam accumsan odio eget 
                                    tempus consectetur.Aliquam et sapien nulla. Suspendisse 
                                    lobortis leo ante, imperdiet tristique magna tristique eu.
                                    Nullam ultrices vulputate odio, eu iaculis nulla congue quis.
                                </p>
                                <div className="bg-orange-50 w-fit p-2 flex gap-x-3 px-2">
                                    <ShoppingCartOutlined />
                                    <p className="text-orange-500 text-sm">
                                        This product has been added to <b>1 people</b> carts.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <p className="text-sm text-justify">
                                            <i className='bx bx-check text-base mr-1 text-green-600' />
                                            <b>Delivered today</b> 
                                            <span className="opacity-60 tracking-tighter"> 
                                                (order Mon-Fri before 12:00, delivery between 17:00 and 22:00)
                                            </span>
                                        </p>
                                        <p className="text-sm text-justify">
                                            <i className='bx bx-check text-base mr-1 text-green-600' />
                                            <b>Including </b> 
                                            <span className="opacity-60 tracking-tighter"> 
                                                shipping costs, sent by blonwe.com
                                            </span>
                                        </p>
                                        <p className="text-sm text-justify opacity-60">
                                            <i className='bx bx-check text-base mr-1 text-green-600' />
                                            Pick up at a blonwe.com collection point is possible
                                        </p>
                                        <p className="text-sm text-justify opacity-60">
                                            <i className='bx bx-check text-base mr-1 text-green-600' />
                                            30 days to change your mind and free returns
                                        </p>
                                        <p className="text-sm text-justify opacity-60">
                                            <i className='bx bx-check text-base mr-1 text-green-600' />
                                            Day and night customer service
                                        </p>
                                        <p className="text-sm text-justify opacity-60">
                                            <i className='bx bx-check text-base mr-1 text-green-600' />
                                            Pick up at a blonwe.com collection point is possible
                                        </p>
                                    </div>
                                    <Divider />
                                    <div>
                                        <p className="text-xs text-justify ">
                                            <span className="opacity-60">SKU: </span>
                                            U5Z8B9I6Q1
                                        </p>
                                        <p className="text-xs text-justify ">
                                            <span className="opacity-60">Categories: </span>
                                            Body Parts,Tools & Equipment
                                        </p>
                                        <p className="text-xs text-justify ">
                                            <span className="opacity-60">Tags: </span>
                                            Android Auto,CarPlay
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button 
                                            shape="circle"  
                                            icon={<TwitterOutlined />} 
                                            className="border-blue-500 hover:bg-[#1DA1F2]" 
                                            style={{color: "#4096FF"}}
                                        />
                                        <Button 
                                            shape="circle"  
                                            icon={<i className='bx bxl-facebook text-lg' />} 
                                            className="border-[#1877F2] hover:bg-[#1877F2] flex items-center justify-center" 
                                            style={{color: "#4096FF"}}
                                        />
                                         <Button 
                                            shape="circle"  
                                            icon={<i className='bx bxl-linkedin' />} 
                                            className="border-[#0077B5] hover:bg-[#0077B5] flex items-center justify-center" 
                                            style={{color: "#4096FF"}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5 px-10">
                            <div className="border p-4 flex flex-col gap-3">
                                <div>
                                    <span className="opacity-70 line-through decoration-gray-600">$369.00 </span>
                                    <span className="text-red-500 text-xl font-semibold">$369.00</span>
                                </div>
                                <Input 
                                    ref={inputEl}
                                    size="large"
                                    addonBefore={<MinusOutlined onClick={decrementValue} />} 
                                    addonAfter={<PlusOutlined onClick={incrementValue} />} 
                                    defaultValue="1" 
                                    className="text-center select-none" 
                                    style={{borderRadius:0}}
                                />
                                <Button 
                                    className="bg-green-600" 
                                    size="large" 
                                    style={{borderRadius: 0}}
                                >Add to cart</Button>
                            </div>
                            <div>
                                
                                <span className="text-sm font-semibold flex items-center gap-1">
                                    <i class='bx bxs-heart text-xl'></i> 
                                     View wishlist
                                </span>
                                <div>
                                    <span className="opacity-60 font-semibold text-sm">2 people </span>
                                    <span className="opacity-70 text-sm">favorited this product</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Tabs defaultActiveKey="1" items={items} />
                </div>
                <h1 className="font-semibold">Related Products</h1>
                <RelatedProducts />
                
            </div>
        </LayoutEl>
    )
}

export default SlugEL