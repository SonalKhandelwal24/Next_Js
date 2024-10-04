"use client"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function page() {

    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const router = useRouter();
    // Extract 'token' from query string
    const searchParams = useSearchParams();
    const token = searchParams.get('token'); 
    console.log("Reset Token: ", token);    
    
    const handleResetPassword = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (password !== confirmpassword) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            const response = await fetch(`http://192.168.1.64:3000/auth/reset-password?token=${token}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json", // Add this headercd
                },
                body: JSON.stringify({ newPassword: password }),
                credentials: 'include',   // Send cookies with the request
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error:", errorData.message);
                toast.error("Failed to reset password");
            } else{
                const data = await response.json();
                toast.success("Password has been reset successfully");
                console.log("Success: ", data);
                // redirect to login after successful password reset
                router.push("/");  
            }
        } catch (error) {
            console.error("Error: ", error);
            toast.error("Failed to reset password");
        }
    }

    return (
        <>
            <ToastContainer position="top-right" />
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="container" style={{ maxWidth: "400px" }}>
                    <div className="text-center">
                        <h2 className="mb-4">Reset Password</h2>
                    </div>

                    <div>

                        <form className="border p-4 rounded" onSubmit={handleResetPassword}>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">New Password</label>
                                <input id="password" name="password" type="password" autoComplete="password" value={password} minLength={6} onChange={(e) => setPassword(e.target.value)} placeholder="******" required
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="confirmpassword" value={confirmpassword} minLength={6} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="******" required
                                    className="form-control" />
                            </div>

                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary w-100">Reset Password</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
};
