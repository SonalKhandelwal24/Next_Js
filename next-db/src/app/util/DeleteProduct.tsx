"use client"
import { useRouter } from "next/navigation";

export default function DeleteProduct(props: any) {
    const router = useRouter();
    console.log(props.id);
    const deleteData = async () => {
        let response = await fetch(`http://localhost:3000/api/products/${props.id}`, {
            method: "delete"
        });
        response = await response.json();
        if (response.success) {
            alert("Product is deleted !!!");
            router.push("/productlist");
        }
    }
    return <button onClick={deleteData}>Delete</button>
}