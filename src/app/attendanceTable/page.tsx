"use client"

import { Key, useEffect, useState } from "react";
import Header from "../components/header"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sidebar from "../components/sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface UserAttendance {
    _id: Key | null | undefined;
    attendanceid: number;
    name: string;
    username: string;
    email: string;
    phone_number: string;
    signIn: string;
    date: string;
    siteView: number;
}

export default function page() {

    const [allUserAttendance, setAllUserAttendance] = useState<UserAttendance[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<UserAttendance[]>([]);
    const [currentUser, setCurrentUser] = useState<UserAttendance | null>(null);
    const [selectedName, setselectedName] = useState("");
    const [selectedDate, setselectedDate] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    const getAllData = async () => {
        try {
            const response = await fetch('http://192.168.1.64:3000/attendance');
            const data = await response.json();
            console.log(data);
            setAllUserAttendance(data);
            setFilteredUsers(data);
        }
        catch (e) {
            console.error("Error fetching user data:", e);
        }
    }

    useEffect(() => {
        getAllData();
    }, [])

    const updateToast = () => toast.success("User's Attendance Details Updated !!!");
    const updateFailedToast = () => toast.error("Failed To Update User's Attendance Details");
    const deleteToast = () => toast.success("User's Attendance Details Deleted !!!");
    const errorToast = () => toast.error("Failed To Delete User Attendance");

    const updateUserAttendance = (userAttendance: UserAttendance) => setCurrentUser(userAttendance);

    const submitEditDetails = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            if (!currentUser) return;

            const updatedUser = {
                name: currentUser.name,
                username: currentUser.username,
                email: currentUser.email,
                phone_number: currentUser.phone_number,
            };
            console.log("Current user", JSON.stringify(updatedUser));

            const res = await fetch(`http://192.168.1.64:3000/attendance/${currentUser._id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser)
            });

            const data = await res.json();

            if (data) {
                updateToast();
                getAllData()
            } else {
                updateFailedToast()
            }
        } catch (e) {
            console.error("Error updating user:", e);
            updateFailedToast();
        }
    }

    const deleteUser = async (id: Key) => {
        try {
            const res = await fetch(`http://192.168.1.64:3000/attendance/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) {
                throw new Error("Failed to delete user");
            }
                deleteToast();
                getAllData();
        } catch (e) {
            console.error(e);            
            errorToast();
        }
    }

    const handleSelectedData = async (e: any) => {
        const name = e.target.value;
        setselectedName(name);
        let filtered = allUserAttendance;
        if (name !== "") {
            filtered = filtered.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));
        }
        setFilteredUsers(filtered);
    }

    function convertDate(date : string): string {
        // Split the original date string by "-"
        const [year, month, day] = date.split('-');

        // Convert to the desired format
        const formattedDate =  `${parseInt(day)}/${parseInt(month)}/${year}`;;
        return formattedDate;
    }

    const handleSelectedDate = (e: any) => {
        const date = e.target.value; 
    
        if (!date) {
            setFilteredUsers(allUserAttendance);
            setselectedDate('');  
            return;
        }
        const formattedDate = convertDate(date);
        console.log("Selected date (for display): ", formattedDate);
        setselectedDate(date); 
    
        const filtered = allUserAttendance.filter((user) => {
            const userDate = user.date;
            return userDate === formattedDate;  
        });
    console.log(selectedDate);
    
        setFilteredUsers(filtered); 
    };

    function convertTimeToHourMinute(time: string): string {
        const [timePart, period] = time.split(' ');
        let [hour, minute] = timePart.split(':');
        if (hour.length === 1) {
            hour = '0' + hour; 
        }    
        return `${hour}:${minute} ${period}`;
    }
    
    return (
        <>
            <ToastContainer position="top-right" />

            <div className='d-flex gap-1 flex-row' style={{ backgroundColor: "rgb(18 18 18)" }}>
                <Sidebar />

                <div className='d-flex gap-1 flex-column w-100'>

                    {/* Header  */}
                    <header className="p-2 bg-dark text-white">
                        <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
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
                                <li>
                                    <Link href="/attendanceForm" className={`nav-link px-2 ${pathname === '/attendanceForm' ? 'text-secondary' : 'text-white'}`}>
                                        Attendance Form
                                    </Link>
                                </li>
                            </ul>

                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input type="search" className="form-control form-control-dark" placeholder="Search User...." aria-label="Search" value={selectedName} onChange={handleSelectedData} />
                            </form>
                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input type="date" className="form-control form-control-dark" placeholder="Search User...." aria-label="Search" value={selectedDate} onChange={handleSelectedDate} />
                            </form>

                            <div className="text-end">
                                <button type="button" className="btn btn-warning" onClick={() => router.push('/')}>Log Out</button>
                            </div>
                        </div>
                    </header>

                    <div className="overflow-x-auto">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">User Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Sign In</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user._id}>
                                        <th scope="row">{user.attendanceid}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone_number}</td>
                                        <td>{user.date}</td>
                                        <td>{convertTimeToHourMinute(user.signIn)}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary me-2" onClick={() => updateUserAttendance(user)} data-bs-toggle="modal" data-bs-target="#EditDetails">Edit</button>
                                            <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade " id="EditDetails" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content text-white" style={{ backgroundColor: "#212529" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Attendance Details</h5>
                            <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <form className=" p-3 rounded" onSubmit={submitEditDetails}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input id="name" name="name" type="text" autoComplete="name" value={currentUser?.name || ""}
                                        onChange={(e) => setCurrentUser({ ...currentUser!, name: e.target.value })} required className="form-control" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input id="username" name="username" type="text" autoComplete="username" value={currentUser?.username}
                                        onChange={(e) => setCurrentUser({ ...currentUser!, username: e.target.value })} required className="form-control" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input id="email" name="email" type="email" autoComplete="email" value={currentUser?.email}
                                        onChange={(e) => setCurrentUser({ ...currentUser!, email: e.target.value })} required className="form-control" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input id="phone" name="phone" type="tel" autoComplete="phone" required minLength={10} maxLength={15} pattern="^\+?[1-9]\d{1,14}$"
                                        value={currentUser?.phone_number} onChange={(e) => setCurrentUser({ ...currentUser!, phone_number: e.target.value })} className="form-control" />
                                </div>

                                <div className=" d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary">Update Details</button>
                                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
