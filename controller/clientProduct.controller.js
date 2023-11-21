import Product from "@/modal/product.modal";
import "@/module/db.module"

export const fetch = async (req,res)=>{
    const productsData = await Product.find({category: req.query.category}); 
    res.status(200).json(productsData)
}