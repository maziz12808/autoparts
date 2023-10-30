import Layout from "../shared/layout";
import WeeklyDiscountProduct from "./weekly-discount-product"
import Hero from "./hero";
const Home = ()=>{
    return (
        <Layout title="Home">
            <Hero />
            <WeeklyDiscountProduct />
        </Layout>
    )
}

export default Home;