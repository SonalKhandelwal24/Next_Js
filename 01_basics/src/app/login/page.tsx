"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Login = () => {

    const router = useRouter();

    const navigate = (name: any) => {
        router.push('/login/' + name)
    }

    return (
        <>
            <div >
                <h1 className="text-lg heading">Login Page</h1>
            </div>
            {/* <Link className="text-xl text-blue-500 m-8" href={'/'}>Go To Home Page</Link> */}
            <div className="btn">
                <button onClick={() => router.push('/')}>Go to Home Page</button>
                <button onClick={() => navigate('loginCollege')}>Go to College Page</button>
                <button onClick={() => navigate('loginStudent')}>Go to Student Page</button>
            </div>
            {/* <Link className="text-white" href={'/login/loginStudent'}>student login</Link> */}
        </>
    )
}

export default Login