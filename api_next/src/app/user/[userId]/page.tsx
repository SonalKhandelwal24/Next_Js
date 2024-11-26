async function getUSer(id : any) {
    const resposne = await fetch(`http://localhost:3000/api/users/${id}`)
    const data = await resposne.json()
    return data.result;
} 

export default async function Page({params} : any) {

    console.log(params.userId);
    const user = await getUSer(params.userId);
    console.log(user);

    return (
        <>
        <div>
            <h1>User Details</h1>
                <h5>Name : {user.name}</h5>
                <h5>Age : {user.age}</h5>
                <h5>Email : {user.email}</h5>
                <h5>Id : {user.id}</h5>
        </div>
        </>
    )
}