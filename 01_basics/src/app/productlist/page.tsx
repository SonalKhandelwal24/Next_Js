"use client";
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight:'500',
    subsets:['latin'],
    display:"fallback"
})

import { useEffect, useState } from "react";

export default function Page() {
    const [product, setProduct] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            let response = await fetch('https://raw.githubusercontent.com/Ovi/DummyJSON/master/raw/quotes/quotes.json');
            let data = await response.json();
            data = data.slice(0, 50);
            // console.log(data);
            setProduct(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className={roboto.className}>Fetch quote data in client component</h1>
            {product.map((item) => (
                <div key={item.id}>
                    <h3  style={{color: "black"}}>Author : {item.author}</h3>
                    <p style={{color: "darkgreen", fontWeight:"bold"}} >Quote: {item.quote}</p>
                </div>
            ))}
        </div>
    );
}

