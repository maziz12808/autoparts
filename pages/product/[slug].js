import { useRouter } from "next/router";
import SlugEl from "@/components/products/slug";
const Slug = ()=> {
    const router = useRouter()
    const {slug} = router.query;
    return <SlugEl title={slug} />
}
export default Slug