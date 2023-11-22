import "@/module/db.module"
import ProductCategory from "@/modal/product-category.modal"

export const fetch = async (req,res)=>{
    try{
        const productCategory = await ProductCategory.find().select(["category","-_id"])
        res.status(200).json(productCategory)
    }
    catch(err)
    {
        console.log(err);
    }
}

export const create = async (req,res)=>{
    try{
        const productCategory = new ProductCategory(req.body)
        await productCategory.save()
        res.status(200).json(productCategory)
    }
    catch(err)
    {
        console.log(err);
    }
}

export const update = async (req,res)=>{
    try{
        const product = await ProductCategory.updateOne({_id: req.query.id},req.body)
        res.status(200).json({message: true})
    }
    catch(err)
    {
        res.status(500).json({message: false})
    }
}

export const trash = async (req,res)=>{
    try{
        await ProductCategory.deleteOne({_id: req.query.id})
        res.status(200).json({message: true})
    }
    catch(err)
    {
        res.status(500).json({message: false})
    }
}
