"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent form submission (page reload)

        try {
            const response = await fetch('http://192.168.1.10:3000/user', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json', // Add this line
                },
                body: JSON.stringify({ name, email, phone_number, password }),
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.log("HTTP error:", response.status, errorText);
                return;
            }

            const data = await response.json();
            console.log(data);

            if (data) {
                toast.success("User registered succesfully!!!");
                router.push('/');
            } else {
                toast.warning("User does not registration succesfully.");
            }

        } catch (e) {
            toast.error("An error occurred while registering. Please try again.");
            console.log("Error message", e);
        }
    };

    return (
        <>
            <div className='min-h-screen bg-[#dddedd] flex justify-center items-center'>
                <div className="h-[90vh] w-[90vw] bg-[#f4f5f8] flex justify-center items-center rounded-lg">

                    <div className="min-w-max w-4/12">
                        <form className="border p-5 rounded-lg shadow-lg" onSubmit={registerUser}>
                            <div className="text-2xl font-bold text-center mb-5">
                                <h2>Sign Up To Your Account</h2>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="username" className="block mb-2 text-md font-medium text-gray-900">Your Username</label>
                                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}
                                    className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="enter username" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900">Your email</label>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="enter email" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="phone" className="block mb-2 text-md font-medium text-gray-900">Your phone number</label>
                                <input type="tel" id="phone" name="phone" autoComplete="phone" value={phone_number} onChange={(e) => setPhone(e.target.value)} minLength={10} maxLength={15} pattern="^\+?[1-9]\d{1,14}$"
                                    className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="enter number" required />
                            </div>
                            <div className="mb-5">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-900">Password</label>          
                                </div>
                                <input type="password" id="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}
                                    className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>

                            <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-6 py-2.5 text-center">Register</button>
                        </form>

                        <p className="text-center mt-4">
                            Already have an account?
                            <Link href="/login" className="text-blue-900 underline">Login</Link>
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
};
