"use client"
import { useState } from "react"
import "./style.css"
import { Bounce, toast, ToastContainer } from "react-toastify";
import {useRouter} from "next/navigation";

export default function page() {

    const notify = () => toast('🦄 added successfully!', {
        position: "top-right",
        theme: "light",

        });

    const router = useRouter();

    const [name, setName] = useState("");
    const [writter, setWritter] = useState("");
    const [language, setLanguage] = useState("");
    const [year, setYear] = useState("");
    const [num_of_copies, setCopies] = useState("");


    const addDetails = async () => {
        let data = await fetch('http://localhost:3000/api/books',
            {
                method: "POST",
                body: JSON.stringify({ name, writter, language, year, num_of_copies })
            }
        );
        data = await data.json();
        if (data.success) {
            toast("Added");
            setName("");
            setWritter("");
            setLanguage("");
            setYear("");
            setCopies("");
        }
    }

    return (
        <div>
            <div className="container">
                <h1 >Add Book</h1>
                <input type="text" value={name} placeholder="Enter book name" onChange={(e) => setName(e.target.value)} required/>
                <input type="text" value={writter} placeholder="Enter book writter" onChange={(e) => setWritter(e.target.value)} required />
                <input type="text" value={language} placeholder="Enter languages" onChange={(e) => setLanguage(e.target.value)} required/>
                <input type="text" value={year} placeholder="Published year" onChange={(e) => setYear(e.target.value)} required/>
                <input type="text" value={num_of_copies} placeholder="Number of copies" onChange={(e) => setCopies(e.target.value)} required/>
                <button onClick={addDetails}>Add Details</button>
                <button onClick={() => router.push("/")}>Back</button>
            </div>
            <button onClick={notify}>Toastify</button>
            <ToastContainer />
        </div>
    )
};
