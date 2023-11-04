import Layout from "../shared/layout";
import WeeklyDiscountProduct from "./weekly-discount-product"
import Hero from "./hero";
import HomeProducts from "./home-products";

const Home = ()=>{
    return (
        <Layout title="Home">
            <div className="px-[3%]">
            <Hero /> 
            <HomeProducts />
            <WeeklyDiscountProduct />
            </div>
        </Layout>
    )
}

export default Home;