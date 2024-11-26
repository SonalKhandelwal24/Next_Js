"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import './about.css'

export default function Layout({ children }: any) {

    const pathName = usePathname();
    console.log(pathName);

    return (
        <div>
            {
                pathName !== "/about/aboutcollege" ?
                    <ul className="about-menu">
                        <li>
                            <h4>About Navbar</h4>
                        </li>
                        <li>
                            <Link href={'/about'}>About Page</Link>
                        </li>
                        <li>
                            <Link href={'/about/aboutstudent'}>Student Page</Link>
                        </li>
                        <li>
                            <Link href={'/about/aboutcollege'}>College Page</Link>
                        </li>
                    </ul>

                    : <Link href={'/about'}>Go to About Page</Link>
            }

            {children}
        </div>
    )

}