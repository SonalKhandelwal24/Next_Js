"use client"
import Link from "next/link";
import "./style.css"
// import DeleteBook from "@/lib/DeleteBook";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {

    const [state, setstate] = useState([])
    const router = useRouter();
    
    const getData = async () => {
        try {
            let response = await fetch('http://localhost:3000/api/books', { cache: "no-cache" });
            const data = await response.json();
            if (data.success) {
                return (data.result);
            } else {
                return ([]);
            }
        } catch (error) {
            console.error("Failed to fetch books", error);
            return ([]);
        }
    }

    const fetchData = async () => {
        const data = await getData();
        setstate(data);
    };
    useEffect(() => {
        fetchData();
    }, [])

    const deleteData = async (id) => {
        let data = await fetch(`http://localhost:3000/api/books/${id}`, {
            method: "delete",
        });
        const record = await data.json();
        if (record.success) {
            alert("Book details are deleted");
            fetchData();

        } else {
            console.error("Failed to delete book");
        }
    };


    return (
        <div>
            <h1>Product List</h1>
            <button onClick={() => router.push("/")}>Back</button>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Writter</td>
                        <td>Language</td>
                        <td>Year</td>
                        <td>Total Copies</td>
                        <td>Actions</td>
                    </tr>
                </thead>

                <tbody>
                    {state.map((item: any) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.writter}</td>
                            <td>{item.language}</td>
                            <td>{item.year}</td>
                            <td>{item.num_of_copies}</td>
                            <td>
                                <Link href={`/bookList/${item._id}`}>Edit</Link>
                                <button onClick={() => deleteData(item._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};



// import Link from "next/link";
// import "./style.css"
// import DeleteBook from "@/lib/DeleteBook";

// const getData = async () => {
//     try {
//         let response = await fetch('http://localhost:3000/api/books', { cache: "no-cache" });
//         const data = await response.json();
//         if (data.success) {
//             return data.result;
//         } else {
//             return [];
//         }
//     } catch (error) {
//         console.error("Failed to fetch books", error);
//         return [];
//     }
// }

// export default async function page() {

//     const data = await getData();
//     // console.log(data);

//     return (
//         <div>
//         <h1>Product List</h1>
//             <table border={1}>
//             <thead>
//                 <tr>
//                     <td>Name</td>
//                     <td>Writter</td>
//                     <td>Language</td>
//                     <td>Year</td>
//                     <td>Total Copies</td>
//                     <td>Actions</td>
//                 </tr>
//             </thead>

//             <tbody>
//                 {data.map((item : any) => (
//                     <tr key={item._id}>
//                         <td>{item.name}</td>
//                         <td>{item.writter}</td>
//                         <td>{item.language}</td>
//                         <td>{item.year}</td>
//                         <td>{item.num_of_copies}</td>
//                         <td>
//                             <Link href={`/bookList/${item._id}`}>Edit</Link>
//                             <DeleteBook id={item._id}  />
//                             {/* <DeleteBook id={item._id} className="delete-book-button" /> */}
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
// </div>
//     )
// };

