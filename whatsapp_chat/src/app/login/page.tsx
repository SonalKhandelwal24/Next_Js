"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    return (
        <>
            <div className='min-h-screen bg-[#dddedd] flex justify-center items-center'>
                <div className="h-[90vh] w-[90vw] bg-[#f4f5f8] flex justify-center items-center rounded-lg">

                    <div className="min-w-max w-4/12">
                        <form className="border p-5 rounded-lg shadow-lg">
                            <div className="text-2xl font-bold text-center mb-5">
                                <h2>Login To Your Account</h2>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="username" className="block mb-2 text-md font-medium text-gray-900">Your Username</label>
                                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}
                                className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="username" required />
                            </div>
                            <div className="mb-5">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-900">Password</label>
                                    <div>
                                        <Link href="/forgotPassword" className="text-primary underline">Forgot password?</Link>
                                    </div>
                                </div>
                                <input type="password" id="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}
                                className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>

                            <button type="submit" onClick={() => router.push("/")} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-6 py-2.5 text-center">Login</button>
                        </form>

                        <p className="text-center mt-4">
                            Don't have an account?
                            <Link href="/signUp" className="text-blue-900 underline"> Sign Up</Link>
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
};
