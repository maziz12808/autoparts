import AdminLayout from "@/components/shared/admin-layout"
import { useState } from "react"
//import Image from "next/image"
import axios from "axios" 
import useSWR, {mutate} from "swr"
import AWS from "@/module/aws.module"
import { 
    Button,
    Drawer,
    Form,
    Input,
    message,
    Table,
    Progress,
    Image
} from "antd"
import { 
    EditOutlined,
    DeleteOutlined, 
    CloudUploadOutlined 
} from "@ant-design/icons"

const { Item } = Form

const fecher = async (api)=>{
    try {
        const {data} = await axios.get(api)
        return data
    }
    catch(err)
    {
       return err
    }
}

const Products = ()=>{
    
    const [openDrawer,setOpenDrawer] = useState(false)
    const [formData,setFormData] = useState(null)
    const [progress,setprogress] = useState(0)
    const [currentPage,setCurrentPage] = useState(1)
    const [pageSize,setPageSize] = useState(10)
    const [percentage,setPercentage] = useState(0)
    const [productForm] = Form.useForm()
    const { data:allProduct, error, isLoading } = useSWR(`/api/admin/products?page=${currentPage}&limit=${pageSize}`,fecher,{ refreshInterval: 1000 })
    const s3 = new AWS.S3()
    const toolbar = [
        <Button key={1} type="text" onClick={()=> setOpenDrawer(!openDrawer)}>Add Products</Button>
    ]
    const defaultValue = {
        title: "product title",
        category: "body parts",
        discount: 23,
        price: 40000,
        quantity: 200,
        description: "this is description"
    }
    // Edit Product
    const editProduct = (productItem)=>{
        setFormData(productItem)
        productForm.setFieldsValue(productItem)
        setOpenDrawer(true)
    }
    // Edit Product
    const deleteProduct = async (pid)=>{
        try{
            const data = await axios.delete(`/api/admin/products/${pid}`);
            mutate("/api/admin/products")
        }
        catch(err)
        {
            message.error("Unable to delete product please try again latter")
        }
    }
    const editDeleteDesign = (text,obj)=>{
        return (
            <div className="flex gap-2">
                <Button className="border-0" onClick={()=> editProduct(obj)} icon={<EditOutlined />} />
                <Button onClick={()=> deleteProduct(obj._id)} className="text-red-500 border-0" icon={<DeleteOutlined />} />
            </div>
        )
    }
    const onProductImageUpload = (id)=>{
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*"
        input.click()
        input.onchange = async ()=>{
            setprogress(id)
            const file = input.files[0];
            input.remove()
            const uploader = s3.upload({
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
                Key: "products-images/"+file.name,
                Body: file,
                ACL: 'public-read'
            })
            uploader.on("httpUploadProgress",({total,loaded})=>{
                const percent = Math.floor((loaded*100)/total)
                setPercentage(percent)
            })
            try{
                const fileData = await uploader.promise();
                await  axios.put(`/api/admin/products/${id}`,{image:fileData.Key})
                mutate("/api/admin/products")
            }
            catch(err)
            {
                console.log(err);
            }
            finally{
                setprogress(0)
            }
        }
    }
    const prodImageTitleDesign = (text,obj)=>{
        return (
            <div className="flex gap-1 items-center">
                {
                    progress == obj._id ? <Progress type="circle" percent={percentage} size={40} /> :
                    <Image.PreviewGroup
                        items={[
                            obj.image ? 
                            process.env.NEXT_PUBLIC_AWS_S3_BUCKET_URL+obj.image 
                            : 
                            "/images/no-image.png"
                        ]}
                    >
                        <Image 
                            src={
                                obj.image ? 
                                process.env.NEXT_PUBLIC_AWS_S3_BUCKET_URL+obj.image 
                                : 
                                "/images/no-image.png"
                            }
                            width={70} 
                            height={30}
                            alt={`no-image${obj._id}`} 
                        />
                    </Image.PreviewGroup>
                }
                {
                    progress == 0 ? 
                    <Button 
                        size="large" 
                        onClick={()=> onProductImageUpload(obj._id)} 
                        icon={<CloudUploadOutlined />} 
                        type="text" 
                        style={{background: "inherit"}} 
                    /> :
                    null
                }
            </div>
        )
    }
    const columns = [
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: prodImageTitleDesign
    },
    {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
        ellipsis: true
    },
    {
        title: 'category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'discount',
        dataIndex: 'discount',
        key: 'discount',
    },
    {
        title: 'price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
        ellipsis: true
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: editDeleteDesign
    }
    ];
    // *******************************FUNCTIONS***********************************************
    
    const onProductSave = async (values)=>{
        try{
            await axios.put(`/api/admin/products/${formData._id}`,values)
            mutate("/api/admin/products")
            setFormData(null)
            message.success("Product updated")
        }
        catch(err)
        {
            console.log(err);
        }
        finally{
            setFormData(null)
            productForm.resetFields()
            //setOpenDrawer(false)
        }
    }    
    const onProduct = async (values)=>{
        try{
            await axios.post("/api/admin/products",values)
            mutate("/api/admin/products")
            message.success("Product added")
        }
        catch(err)
        {
            console.log(err);
        }
        finally{
            //setOpenDrawer(false)
        }
    }

    const onClose = ()=> {
        setFormData(null)
        productForm.resetFields()
        setOpenDrawer(false)
        
    }
    const onPagination = (obj)=>{
        setPageSize(obj.pageSize)
        setCurrentPage(obj.current)
    }
    return (
        <AdminLayout title="products" toolbar={toolbar}>
            <Table 
                dataSource={allProduct && allProduct.products} 
                columns={columns} 
                onChange={onPagination} 
                size="small" 
                pagination={{total: allProduct && allProduct.total}}
                scroll={{
                    x: 1000,
                    y: 430,
                }}
            />
            <Drawer
                title="Basic Drawer"
                placement="right" 
                width={720}
                closable={false}
                onClose={onClose}
                open={openDrawer}
                key="right"
                className="text-center"
            >
                <Form 
                    onFinish={formData ? onProductSave : onProduct} 
                    layout="vertical" 
                    className="grid grid-cols-2 gap-x-3" 
                    form={productForm} 
                >
                    <Item 
                        name="title" 
                        label="Product Title"
                        rules={[
                            {required:true,message: "This field is required!"}
                        ]} 
                        className=" col-span-2"
                    >
                        <Input 
                            style={{borderRadius: 0}} 
                            placeholder="Product Title" 
                            size="middle" 
                            
                        />
                    </Item>
                    <Item 
                        name="category" 
                        label="Products Category"
                        rules={[
                            {required:true,message: "This field is required!"}
                        ]}>
                        <Input 
                            style={{borderRadius: 0}} 
                            placeholder="Products Category" 
                            size="middle"
                        />
                    </Item>
                    <Item
                        name="discount" 
                        label="Discount"
                    >
                        <Input type="number"  placeholder="Discount" />
                    </Item>
                    <Item
                        name="price" 
                        label="Product Price"
                        rules={[
                        {
                            required: true,
                            message: 'This field is required!'
                        }
                        ]}
                    >
                        <Input  placeholder="Product Price" />
                    </Item>
                    <Item
                    name="quantity" 
                    label="Product Quantity"
                    rules={[
                    {
                        required: true,
                        message: 'This field is required!'
                    }
                    ]}
                    >
                        <Input  placeholder="Product Quantity" />
                    </Item>
                    <Item
                        name="description" 
                        label="Product Desription"
                        rules={[
                        {
                            required: true,
                            message: 'This field is required!'
                        }
                        ]}
                        className="col-span-2"
                    >
                        <Input.TextArea  placeholder="Product Desription" />
                    </Item>
                    <Item>
                        {
                            formData ? 
                            <Button 
                                htmlType="submit" 
                                size="middle" 
                                className="bg-rose-500 border-0 w-full font-semibol shadow-none" 
                                style={{borderRadius: 0,color:"whitesmoke"}}
                            >Save</Button> :
                            <Button 
                                htmlType="submit" 
                                size="middle" 
                                className="bg-[#009688] border-0 w-full font-semibol shadow-none" 
                                style={{borderRadius: 0,color:"whitesmoke"}}
                            >Submit</Button>   
                        }
                    </Item>
                </Form>
            </Drawer>
        </AdminLayout>
    )
}

export default Products