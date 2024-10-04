"use client"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {

    const [email, setEmail] = useState("");

    const forgotPassword = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await fetch('http://192.168.1.64:3000/auth/forgot-password', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Add this headercd
                },
                body: JSON.stringify({ email }),
                credentials: 'include',   // Send cookies with the request
            });

            if (!response.ok) {
                console.log("Invalid email");
                toast.error("Invalid email. Please try again.");
            } else {
                const data = await response.json();
                console.log("Email:", data);
                toast.success("Password reset link sent successfully!");
            }

        } catch (error) {
            console.log(error);
            toast.error("An error occurred while sending the reset link.");
        }

    }

    return (
        <>
            <ToastContainer position="top-right" />
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="container" style={{ maxWidth: "400px" }}>
                    <div className="text-center">
                        <h2 className="mb-4">Forgot Password</h2>
                    </div>

                    <div>
                        <form className="border p-4 rounded" onSubmit={forgotPassword}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input id="email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                                    className="form-control" />
                            </div>


                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary w-100">Send Password Reset Link</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
};
