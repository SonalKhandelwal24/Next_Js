"use client"
import { useEffect, useState } from "react";
import "../../style.css"
import Link from "next/link";

export default function Page(props: { params: { updateproduct: any; }; }) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [colour, setColour] = useState("")
    const [company, setCompany] = useState("")

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        let productid = props.params.updateproduct;
        let productData = await fetch(`http://localhost:3000/api/products/${productid}`);
        productData = await productData.json();
        if (productData.success) {
            let result = productData.result;
            setName(result.name)
            setPrice(result.price)
            setColour(result.colour)
            setCompany(result.company)
            setCategory(result.category)
        }
    }

    const updateProduct = async () => {
        let productid = props.params.updateproduct;
        let data = await fetch(`http://localhost:3000/api/products/${productid}`, {
            method: "PUt",
            body: JSON.stringify({ name, price, colour, category, company })
        });
        data = await data.json();
        if (data.result) {
            alert("Product has been updated")
        }
        console.log(data.result);
        
        setName("")
        setPrice("")
        setColour("")
        setCompany("")
        setCategory("")
    }

    return (
        <div>
            <div className="container">
                <h1>Update Products</h1>
                <input type="text" value={name} placeholder="Enter Product Name" onChange={(e) => setName(e.target.value)} className="input" />
                <input type="text" value={price} placeholder="Enter Product Price" onChange={(e) => setPrice(e.target.value)} className="input" />
                <input type="text" value={colour} placeholder="Enter Product Colour" onChange={(e) => setColour(e.target.value)} className="input" />
                <input type="text" value={company} placeholder="Enter Product Company" onChange={(e) => setCompany(e.target.value)} className="input" />
                <input type="text" value={category} placeholder="Enter Product Category" onChange={(e) => setCategory(e.target.value)} className="input" />
                <button className="btn" onClick={updateProduct}>Update</button>
                <Link href={"/productlist"}> Go to product list </Link>
            </div>
        </div>

    )
}