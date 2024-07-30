"use client"
import './style.css'
import { toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";

export default function DeleteBook(props : any) {

    const router = useRouter();
    console.log("deleted id = " , props.id)
    const deletedata = async () => {
            let data = await fetch(`http://localhost:3000/api/books/${props.id}` , { 
                method: "delete",
            });
            const record = await data.json();
            if (record.success) {
                alert("Book details are deleted");
                props.getData()
                
            } else {
                console.error("Failed to delete book");
            }
    };

    return (
        <button onClick={deletedata} className="delete-button">
            Delete
        </button>

    )
};


            