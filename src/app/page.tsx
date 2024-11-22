"use client"

import Link from "next/link";
import { useState } from "react";
import  "bootstrap/dist/css/bootstrap.min.css"
import { useRouter } from "next/navigation";
import './globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent form submission (page reload)

        try {
            const response = await fetch('http://192.168.1.10:3000/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Add this headercd
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include',   // Send cookies with the request
            });

            console.log("HTTP Status:", response.status); // Debugging line
            console.log("HTTP Headers:", response.headers); // Debugging line
            
            if (!response.ok) {
                const errorText = await response.text();
                console.log("HTTP error:", response.status, errorText);
                if(response.status === 401) {
                    toast.warning("Invalid login credentials");
                } else {
                    toast.error("An error occurred. Please try again later.");
                }
                return;
            } 

            const data = await response.json();
            console.log("Login response data:", data);

            if (data) {
                // Store access token in local storage
                localStorage.setItem("Access Token", data.accessToken); 

                // Role-based redirection
                const userRole = data.user.role;
                if(userRole === "Admin") {
                    toast.success("Admin Login successfully!");
                    router.push('/adminDashboard');
                } else if (userRole === "User") {
                    toast.success("User Login successfully!");
                    router.push('/attendanceForm');
                } else {
                    toast.warning("Unknowwn role. Contact admin.");
                }
            }

        } catch (e) {
            console.error("Fetch error:", e); 
            toast.error("There was an error in logging.");
        }
    };

    return (
    <>
        <ToastContainer position="top-right" /> 
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container" style={{ maxWidth: "400px" }}>
                <div className="text-center">
                    <h2 className="mb-4">User Login Page</h2>
                </div>

                <div>

                    <form className="border p-4 rounded" onSubmit={loginUser}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input id="email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" required 
                            className="form-control" />
                        </div>

                        <div className="mb-3">
                            <div className="d-flex justify-content-between">
                                <label htmlFor="password" className="form-label">Password</label>
                                <div>
                                    <Link href="/forgotPassword" className="text-primary">Forgot password?</Link>
                                </div>
                            </div>
                            <input id="password" name="password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" required 
                            className="form-control" />
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                        </div>
                    </form>

                    <p className="text-center mt-4">
                        Don't have an account? 
                        <Link href="/userRegister" className="text-primary">User Register</Link>
                    </p>
                </div>
            </div>
        </div>
        </>
    )

};


