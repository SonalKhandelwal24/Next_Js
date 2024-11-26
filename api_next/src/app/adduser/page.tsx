"use client"
import { useState } from 'react';
import './../style.css'

export default function Page() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("")
    const [age, setage] = useState("")

    const addUser = async () => {
        let response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, age })
        });
        response = await response.json();
        if (response.success) {
            alert("new user added")
        }
        else {
            alert("there is some error")
        }
        console.log(response);
    }

    return (
        <div className="add-user">
            <h1>Add User List</h1>
            <input type="text" value={name} placeholder="Enter name" onChange={(e) => setname(e.target.value)} className="input-field" />
            <input type="text" value={email} placeholder="Enter email" onChange={(e) => setemail(e.target.value)} className="input-field" />
            <input type="text" value={age} placeholder="Enter age" onChange={(e) => setage(e.target.value)} className="input-field" />
            <button onClick={addUser} className="btn">Submit</button>

        </div>
    )

}