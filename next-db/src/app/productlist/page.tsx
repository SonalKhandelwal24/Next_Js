import Link from "next/link";
import "../style.css"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import DeleteProduct from "../util/DeleteProduct";

const getProducts = async () => {
   let response =  await fetch('http://localhost:3000/api/products', {cache:"no-cache"});
   response = await response.json();
   if(response.success){
    return response.result;
   }
   else{
    return {success: false}
   }
}

export default async function Page() {

    const products = await getProducts();
    console.log("list = " + products);
    
    return (
        <div>
        <h1>Product List</h1> 
        <table border="1" >
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Colour</td>
                    <td>Company</td>
                    <td>Category</td>
                </tr>
            </thead>

            <tbody>
                {
                    products.map((item: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; colour: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; company: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; category: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; _id: any; }) => (
                        <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.colour}</td>
                        <td>{item.company}</td>
                        <td>{item.category}</td>
                        <td><Link href={`/productlist/${item._id}`}>Edit</Link>
                        <DeleteProduct id={item._id} />
                        </td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}