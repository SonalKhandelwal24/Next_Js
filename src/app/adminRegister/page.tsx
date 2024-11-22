"use client"
import Link from "next/link";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Admin");
    const router = useRouter();

    const addUserDetails = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent form submission (page reload)

        try {
            const response = await fetch('http://192.168.1.10:3000/user', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json', // Add this line
                },
                body: JSON.stringify({ name, username, email, phone_number, password, role }),
            });
            if (!response.ok) {
                const errorText = await response.text();
                if (response.status === 409) {
                    toast.warning(errorText || "Admin already exists.");
                } else if (response.status === 400) {
                    toast.warning("Bad request. Please check the input.");
                } else if (response.status === 500) {
                    toast.error("Internal Server Error. Please try again later.");
                } else {
                    toast.warning("Registration failed. Please try again.");
                }                
                return;
            }

            const data = await response.json();
            console.log(data);
            
            if (data) {
                toast.success("Admin registered succesfully!!!");
                router.push('/attendanceForm');
            } else {
                toast.warning("Admin does not registration succesfully.");
            }

        } catch (e) {
            toast.error("There was an error logging in.");
        }
    };

    return (
        <>
            <ToastContainer position="top-right" />

            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="container" style={{ maxWidth: "400px" }}>
                    <div className="text-center">
                        <h2 className="mb-4">Admin Sign-Up Form</h2>
                    </div>

                    <div>
                        <form className="border p-4 rounded" onSubmit={addUserDetails}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input id="name" name="name" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" required
                                    className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input id="username" name="username" type="text" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter name" required
                                    className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input id="email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required
                                    className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input id="phone" name="phone" type="tel" autoComplete="phone" minLength={10} maxLength={15} pattern="^\+?[1-9]\d{1,14}$" value={phone_number} onChange={(e) => setPhone(e.target.value)}
                                    className="form-control" placeholder="Enter phone number" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input id="password" name="password" type="password" minLength={6} maxLength={16} autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} 
                                    className="form-control" placeholder="******" required />
                            </div>

                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary w-100">Register</button>
                            </div>
                        </form>

                        <p className="text-center mt-4">
                            Already have an account?
                            <Link href="/" className="text-primary"> Login</Link>
                        </p>
                    </div>

                </div>
            </div>

        </>
    )
}
