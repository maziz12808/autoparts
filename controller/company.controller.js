import "@/module/db.module"
import Company from "@/modal/company.modal"

export const create = async (req,res)=>{
    const { companyName, founderName, gst } = req.body;
    try{
        const company = new Company({ companyName, founderName, gst });
        await company.save();
        res.status(200).json(company)
    }
    catch(err)
    {
        res.status(500).json({signup: false, err})
    }
}
