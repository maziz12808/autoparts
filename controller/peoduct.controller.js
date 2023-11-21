import "@/module/db.module"
import Product from "@/modal/product.modal"

export const create = async (req,res)=>{
    try{
        const product = new Product(req.body)
        await product.save()
        res.status(200).json(product)
    }
    catch(err)
    {
        console.log(err);
    }
}

export const fetch = async (req,res)=>{
    const { page, limit } = req.query
    const total = await Product.countDocuments();
    const skip = (page - 1) * limit
    const products = await Product.find().skip(skip).limit(limit)
    if(!products.length) return res.status(200).json({total,products})

    res.status(200).json({total,products})
}

export const update = async (req,res)=>{
    try{
        const product = await Product.updateOne({_id: req.query.id},req.body)
        res.status(200).json({message: true})
    }
    catch(err)
    {
        res.status(500).json({message: false})
    }
}

export const trash = async (req,res)=>{
    try{
        await Product.deleteOne({_id: req.query.id})
        res.status(200).json({message: true})
    }
    catch(err)
    {
        res.status(500).json({message: false})
    }
}