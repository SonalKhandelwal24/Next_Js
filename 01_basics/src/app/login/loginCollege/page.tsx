"use client"
import { useRouter } from "next/navigation"

const LoginCollege = () => {

    const router = useRouter();

    return (
<>
        <div >
        <h1 className="heading"> Login College Page </h1> 
        </div>
        <button  onClick={() => router.push('/login')}>Go to Login Page</button>
        </>

    )
}

export default LoginCollege