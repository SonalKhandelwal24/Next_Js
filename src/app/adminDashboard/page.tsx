"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Key, useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../components/sidebar';
import { Link, TextField } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

interface Users {
    _id: Key | null | undefined;
    userid: string;
    name: string;
    username: string;
    email: string;
    phone_number: string;
    password: string;
    registerDate: string;
    registerTime: string;
    role: string;
}

export default function page() {

    const [userData, setUserData] = useState<Users[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<Users[]>([]);
    const [currentUser, setCurrentUser] = useState<Users | null>(null);
    const [user, setUser] = useState('');
    const [selectedName, setselectedName] = useState("");
    const [selectedDate, setselectedDate] = useState("");
    const router = useRouter();
    const pathname = usePathname();


    const getAllData = async () => {
        try {
            const response = await fetch('http://192.168.1.10:3000/user');
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            const data = await response.json();
            console.log(data);

            setUserData(data);
            setFilteredUsers(data);
        }
        catch (e) {
            console.error("Error fetching user data:", e);
            toast.error("Error fetching user data");
        }
    }

    useEffect(() => {
        getAllData();
    }, [])

    const updateToast = () => toast.success("User Details Updated !!!");
    const updateFailedToast = () => toast.error("Failed To Update User Details");
    const deleteToast = () => toast.success("User Deleted successfully!!!");
    const errorToast = () => toast.error("Failed To Delete User");

    const updateUser = (user: Users) => setCurrentUser(user);

    const submitEditDetails = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!currentUser) return;

        const updatedUser = {
            name: currentUser.name,
            username: currentUser.username,
            email: currentUser.email,
            phone_number: currentUser.phone_number,
        };
        console.log("Payload:", JSON.stringify(updatedUser));

        try {
            const res = await fetch(`http://192.168.1.10:3000/user/${currentUser._id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser)
            });

            if (!res.ok) {
                throw new Error("Failed to update user");
            }

            updateToast();
            getAllData();

        } catch (e) {
            console.error(e)
            updateFailedToast();
        }
    };

    const deleteUser = async (id: Key) => {
        try {
            const res = await fetch(`http://192.168.1.10:3000/user/${id}`, {
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

    const handleSelectedData = async (e: { target: { value: any; }; }) => {
        const name = e.target.value;
        setselectedName(name);
        let filtered = userData;
        if (name !== "") {
            filtered = filtered.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));
        }
        setFilteredUsers(filtered);
    }

    function convertDate(date: string): string 
    {
        const [year, month, day] = date.split('-');
        return `${parseInt(day)}/${parseInt(month)}/${year}`; 
    }

    const handleSelectedDate = (e: any) => {
        const date = e.target.value; 
    
        if (!date) {
            setFilteredUsers(userData);
            setselectedDate('');  
            return;
        }
        const formattedDate = convertDate(date);
        console.log("Selected date (for display): ", formattedDate);
        setselectedDate(date); 
    
        const filtered = userData.filter((user) => {
            const userDate = user.registerDate;
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
                    {/* <Header /> */}
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
                                <input type="date" id='date' name='date' className="form-control form-control-dark" aria-label="date" value={selectedDate} onChange={handleSelectedDate} />
                            </form>

                            <div className="text-end">
                                <button type="button" className="btn btn-warning" onClick={() => router.push('/')}>Log Out</button>
                            </div>
                        </div>
                    </header>

                    <div>
                        <table className="table table-dark ">
                            <thead>
                                <tr>
                                    <th scope="col">User Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone number</th>
                                    <th scope="col">Register Date</th>
                                    <th scope="col">Register Time</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user._id}>
                                        <th scope="row">{user.userid}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone_number}</td>
                                        <td>{user.registerDate}</td>
                                        <td>{convertTimeToHourMinute(user.registerTime)}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary me-2" onClick={() => updateUser(user)} data-bs-toggle="modal" data-bs-target="#EditDetails">Edit</button>
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
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit User Details</h5>
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
                                    <input id="phone" name="phone" type="tel" autoComplete="phone" minLength={10} maxLength={15} pattern="^\+?[1-9]\d{1,14}$" required
                                        value={currentUser?.phone_number} onChange={(e) => setCurrentUser({ ...currentUser!, phone_number: e.target.value })} className="form-control" />
                                </div>

                                <div className=" d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary" >Update Details</button>
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
