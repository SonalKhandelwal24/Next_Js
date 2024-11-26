"use client"
import { useRouter } from "next/navigation"

const LoginStudent = () => {

    const router = useRouter();

    return (
<>
        <div >
        <h1 className="heading"> Login Student Page </h1> 
        </div>
        <button  onClick={() => router.push('/login')}>Go to Login Page</button>
        </>

    )
}

export default LoginStudent