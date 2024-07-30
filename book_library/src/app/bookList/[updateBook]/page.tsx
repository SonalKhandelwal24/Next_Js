"use client"
import { useEffect, useState } from "react"
import "./style.css"
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function page({params}) {

    let id = params.updateBook;
    console.log("Id = " , id);
    
    const router = useRouter()
    const [name, setName] = useState("");
    const [writter, setWritter] = useState("");
    const [language, setLanguage] = useState("");
    const [year, setYear] = useState("");
    const [num_of_copies, setCopies] = useState("");

    useEffect(() => {
        getBookData();
    }, [])

    const getBookData = async () => {
         let user = await fetch(`http://localhost:3000/api/books/${id}`);
         user = await user.json();
         if(user.success){
            const result = user.result;
            setName(result.name);
            setWritter(result.writter);
            setLanguage(result.language);
            setYear(result.year);
            setCopies(result.num_of_copies);
         }
    }
    
    const updateDetails = async () => {
        let data = await fetch(`http://localhost:3000/api/books/` + id ,
            {
                method: "PUT",
                body: JSON.stringify({ name, writter, language,year, num_of_copies })
            }
        );
        data = await data.json();
        if (data.result) {
            alert("updated")
            // toast("Update details");
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
                <h1>Update Book Details</h1>
                <input type="text" value={name} placeholder="Enter book name" onChange={(e) => setName(e.target.value)} required />
                <input type="text" value={writter} placeholder="Enter book writter" onChange={(e) => setWritter(e.target.value)} required />
                <input type="text" value={language} placeholder="Enter languages" onChange={(e) => setLanguage(e.target.value)} required />
                <input type="text" value={year} placeholder="Published year" onChange={(e) => setYear(e.target.value)} required />
                <input type="text" value={num_of_copies} placeholder="Copies" onChange={(e) => setCopies(e.target.value)} required />
                <button onClick={updateDetails}>Update Details</button>
                <button onClick={() => router.push("/bookList")}>Back</button>
            </div>
        </div>
    )
};
