import Link from "next/link"
import './login.css'

export default function Layout({children}:any){

    return(
        <div>
            <ul className="login-menu">
                <li>
                        <h4>Login Navbar</h4>
                </li>
                <li>    
                        <Link href={'/login'}>Login Main</Link>
                </li>
                <li>
                        <Link href={'/login/loginStudent'}>Login Student</Link>
                </li>
                <li>
                        <Link href={'/login/loginCollege'}>Login College</Link>
                </li>
            </ul>

            {children}
        </div>
    )

}