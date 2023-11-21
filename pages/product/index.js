import Products from "@/components/products";

const Product = ()=>{
    return <Products />
}

export default Product

export const getStaticPaths = (req)=>{
    return {
        paths: {
            params: {},
            fallback: false
        }
    }
}

export function getStaticProps(context) {
    console.log(req);
    return {
        props: {data: ""},
    }
}