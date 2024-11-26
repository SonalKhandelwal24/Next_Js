"use client"
// import Link from "next/link"
import { useRouter } from "next/navigation"

const About = () => {

    const router = useRouter();
    return (
        <>
            <div>
                <h1 className="heading">About Page</h1>
            </div>
            {/* <Link className="text-xl text-blue-500 m-8" href={'/'}>Go To Home Page</Link> */}
            <button className="btn" onClick={() => router.push('/')}>Go to Home Page</button>
        </>
    )
}

export default About