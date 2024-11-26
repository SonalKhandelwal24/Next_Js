"use client"
import { useEffect, useState } from "react";

export default function Page({ params }) {

    let id = params.userId;
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [age, setage] = useState("");

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/users/${id}`);
            const data = await response.json();
            console.log("data ", data);
            setname(data.result.name);
            setemail(data.result.email);
            setage(data.result.age);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    }

    const updateUser = async () => {
        let result = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "PUT",
            body: JSON.stringify({ name, age, email })
        });
        result = await result.json()
        console.log(result);
        if (result.success) {
            alert("User information updated")
        }
        else {
            alert("please try with valid input")
        }
    }

    return (
        <div>

            <div className="add-user">
                <h1> Update User Details </h1>
                <input type="text" value={name} placeholder="Enter name" onChange={(e) => setname(e.target.value)} className="input-field" />
                <input type="text" value={email} placeholder="Enter email" onChange={(e) => setemail(e.target.value)} className="input-field" />
                <input type="text" value={age} placeholder="Enter age" onChange={(e) => setage(e.target.value)} className="input-field" />
                <button onClick={updateUser} className="btn">Submit</button>

            </div>

        </div>
    )
}