"use client";
import 'bootstrap/js/dist/dropdown';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() { 
    const router = useRouter();
    const pathname = usePathname();

    return (
        <>
            <header className="p-2 bg-dark text-white">
                <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {/* {role === "Admin" && ( <> */}
                                <li>
                                    <Link href="/adminDashboard" className={`nav-link px-2 ${pathname === '/adminDashboard' ? 'text-secondary' : 'text-white'}`}>
                                        Admin Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/attendanceTable" className={`nav-link px-2 ${pathname === '/attendanceTable' ? 'text-secondary' : 'text-white'}`}>
                                        Attendance Table
                                    </Link>
                                </li>
                            {/* </> )} */}
                        <li>
                            <Link href="/attendanceForm" className={`nav-link px-2 ${pathname === '/attendanceForm' ? 'text-secondary' : 'text-white'}`}>
                                Attendance Form
                            </Link>
                        </li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-warning" onClick={() => router.push('/')}>Log Out</button>
                    </div>
                </div>
            </header>
        </>
    );
}
