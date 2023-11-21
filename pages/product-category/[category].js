import Products from "@/components/products"
import axios from 'axios';
const prod = ()=> {
    return <Products />
}

export default prod

export const getStaticPaths = ()=>{
    return {
        paths: [
            {
                params: {category: 'Body Parts'}
            },
            {
                params: {category: 'Brake Disks & pads'}
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

export const getStaticProps = ({params})=>{
    
    return {
        props: {data: "aziz"}
    }
}