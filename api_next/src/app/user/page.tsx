import Link from "next/link";
import './../style.css'
import DeleteUser from "@/util/DeleteUser";

async function getUSers() {
    const resposne = await fetch('http://localhost:3000/api/users')
    const data = await resposne.json()
    return data;
}

export default async function Page() {

    const users = await getUSers();
    console.log(users);

    return (
        <div>
            <h1>Users List</h1>
            {
                users.map((item: any) => (
                    <div key={item.id} className="user-item">
                      <span> <Link href={`/user/${item.id}`}> {item.name} </Link> </span>
                        <span> <Link href={`/user/${item.id}/update`}> Edit </Link>  </span>
                        < DeleteUser id={item.id} />
                    </div>
                ))
            }
        </div>
    )
}