"use client"
import { useState } from "react";
import "../style.css"
import Link from "next/link";

export default function Page() {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [colour, setColour] = useState("")
    const [company, setCompany] = useState("")

    const addProduct = async () => {
        let response = await fetch('http://localhost:3000/api/products', {
            method: "POST",
            body: JSON.stringify({ name, price, category, colour, company })
        });
        response = await response.json();
        if (response.success) {
            alert("New product added");
            setName("")
            setPrice("")
            setCategory("")
            setColour("")
            setCompany("")
        }
    }


    return (
        <div>
            <div className="container">
                <h1>Add Products</h1>
                <input type="text" value={name} placeholder="Enter Product Name" onChange={(e) => setName(e.target.value)} className="input" />
                <input type="text" value={price} placeholder="Enter Product Price" onChange={(e) => setPrice(e.target.value)} className="input" />
                <input type="text" value={colour} placeholder="Enter Product Colour" onChange={(e) => setColour(e.target.value)} className="input" />
                <input type="text" value={company} placeholder="Enter Product Company" onChange={(e) => setCompany(e.target.value)} className="input" />
                <input type="text" value={category} placeholder="Enter Product Category" onChange={(e) => setCategory(e.target.value)} className="input" />
                <button onClick={addProduct} className="btn">Add</button>
                <Link href={"/"}>Back</Link>
            </div>
        </div>

    )
}