import Image from "next/image"
import Link from "next/link"

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
        }
    ]
    return (
       <div className="my-5">
         <div className="flex overflow-hidden w-full">
            {
                product.map((item,index)=>(
                    <div className="w-4/12 text-center" key={index}>
                        <Link href={item.href}>
                            <Image 
                                src={item.src} 
                                width={180} 
                                height={180} 
                                alt="body" 
                                className="mx-auto" 
                            />
                            <h1 className="text-sm font-medium hover:text-orange-500">{item.title}</h1>
                        </Link>
                    </div>
                ))
            }
        </div>
       </div>
    )
}

export default HomeProducts