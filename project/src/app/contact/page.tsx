"use client";

import { useState } from "react";

export default function Page() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone_number, setNumber] = useState("");
    const [beginner, setBeginner] = useState(false);
    const [coder, setCoder] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleAddUser = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }
        setPasswordError(""); // Clear any previous error
        console.log({name, email, address, phone_number, beginner, coder, password }); 

        const response = await fetch('http://localhost:3000/api/users',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, email, address, phone_number, beginner, coder, password})
            });
        if (!response.ok) {
            const errorText = await response.text();
            console.error("HTTP error:", response.status, errorText);
            return;
        }
        const data = await response.json();
        console.log("User added successfully:", data);       
        if(data.success){
            setName("");
            setEmail("");
            setAddress("");
            setNumber("");
            setBeginner(false);
            setCoder(false);
            setPassword("");
            setConfirmPassword("");
        }
    }

    return (
        <>
        <div style={{marginTop:"80px"}}>

            <div className="container mt-4" >
                <form onSubmit={handleAddUser}>
                    <h2 className="mb-4" >Contact Form</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" required autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="address" rows={2} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" required autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">Phone number</label>
                        <input type="tel" value={phone_number} onChange={(e) => setNumber(e.target.value)} className="form-control" id="number" aria-describedby="phoneHelp" required autoComplete="off" />
                    </div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" checked={beginner} onChange={(e) => setBeginner(e.target.checked)} id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Beginner
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" checked={coder} onChange={(e) => setCoder(e.target.checked)} id="flexCheckChecked" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Professional Coder
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} className="form-control" id="confirmpassword" />
                    </div>
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>
        </>
    );
};
