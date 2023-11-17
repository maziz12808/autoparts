import AdminLayout from "@/components/shared/admin-layout"
import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios" 
import useSWR, {mutate} from "swr"
import { 
    Button,
    Drawer,
    Form,
    Input,
    message,
    Table
} from "antd"
import { EditOutlined,DeleteOutlined } from "@ant-design/icons"

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
    const [productForm] = Form.useForm()
    const { data:allProduct, error, isLoading } = useSWR("/api/admin/products",fecher)
  
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
            console.log(data);
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
    const prodImageTitleDesign = (text,obj)=>{
        return (
            <div className="flex gap-1">
                <Image src="/images/no-image.png" width={100} height={100} alt="no-image" />
                <h1 className="font-semibold">{text}</h1>
            </div>
        )
    }
    const columns = [
    {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
        render: prodImageTitleDesign
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
            setOpenDrawer(false)
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
            setOpenDrawer(false)
        }
    }

    const onClose = ()=> {
        setFormData(null)
        productForm.resetFields()
        setOpenDrawer(false)
        
    }

    return (
        <AdminLayout title="products" toolbar={toolbar}>
            <Table dataSource={allProduct} columns={columns} />
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
                <Form onFinish={formData ? onProductSave : onProduct} layout="vertical" className="grid grid-cols-2 gap-x-3" form={productForm}>
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