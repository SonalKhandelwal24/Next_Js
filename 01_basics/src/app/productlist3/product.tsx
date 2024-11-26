"use client"
import { useState } from "react";

export default function Product({ author }: any) {

    const [state, setstate] = useState([]);
    console.log(author);

    const func = () => (
        setstate(author)
    )
    return (
        <div>
            <button onClick={func}>click me</button>
            <h3 style={{color: "black"}}>Author name : {state}</h3>
        </div>
    )

}