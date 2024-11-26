import Link from "next/link";
import getUsers from "../../../services/getUsers"

export default async function Page() {
    
    const users = await getUsers();
    // console.log(users);
    
    return(
        <div>
            <h1>User List</h1>
            {
                users.map((user : any) => (
                    <div key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </div>
                ))
            }
        </div>
    )
};
