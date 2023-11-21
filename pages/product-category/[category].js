import Products from "@/components/products"
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000/"

const prod = ({data})=> {
    return <Products productDetail={data} />
}

export default prod

export const getStaticPaths = ()=>{
    return {
        paths: [
            {
                params: {category: 'Body Parts'}
            },
            {
                params: {category: 'Brake Disks pads'}
            },
            {
                params: {category: 'Engin Parts'}
            },
            {
                params: {category: 'Filters'}
            }
        ],
        fallback: false
    }
}

export const getStaticProps = async ({params})=>{
    const {category } = params
    try{
        const {data } = await axios.get(`/api/products?category=${category}`)
        return {
            props: {data}
        }
    }
    catch(err)
    {
        return {
            props: {data: "no data"}
        }
    }
    
}