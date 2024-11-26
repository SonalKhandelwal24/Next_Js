import getUsers from "../../../../services/getUsers";

export default async function Page(props: { params: { userId: any; }; }) {

    const users = await getUsers();
    const currentId = props.params.userId;
    const userData = users[currentId-1];
    console.log("userdata " , userData);
    // console.log(users[currentId-1]);

    return (
        <div>
            <h2>User detail Page</h2>
           <h4>{userData.id}</h4> 
            <h4>{userData.name}</h4> 
        </div>
    )
}

export async function generateStaticParams() {

    const getUserList = getUsers();
    const users = await getUserList;
    return users.map((user : any) => ({
        userId: user.id.toString()
    }))
}