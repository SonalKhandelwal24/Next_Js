"use client";

import { Key, useEffect, useState } from "react";
import { getuser } from "../getuser/page";

interface User {
    password: number;
    coder: boolean;
    beginner: boolean;
    _id: Key | null | undefined;
    userid: number;
    name: string;
    email: string;
    phone_number: string;
    address: string;
}

export default function Page() {
    const [userData, setUserData] = useState<User[]>([]);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [selectedName, setselectedName] = useState("");
    const [filteredData, setfilteredData] = useState<User[]>([]);

    const fetchUserDetails = async () => {
        try {
            const data = await getuser();
            setUserData(data);
            setfilteredData(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const updateList = (user: User) => {
        setCurrentUser(user);
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!currentUser) return;

        const response = await fetch(`http://localhost:3000/api/users/${currentUser._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(currentUser),
        });

        const data = await response.json();
        if (data.success) {
            fetchUserDetails();
        } else {
            console.error("Failed to update user details");
        }
    };

    const deleteList = async (id: Key) => {
        const response = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "DELETE",
        });

        const data = await response.json();
        if (data.success) {
            alert("User details deleted!");
            fetchUserDetails();
        } else {
            console.error("Failed to delete user list!");
        }
    };

    const handleSelectedData = (e) => {
        const name = e.target.value;
        setselectedName(name);
        let filtered = userData;
        if (name !== "") {
            filtered = filtered.filter((user) =>
                user.name.toLowerCase().includes(name.toLowerCase()));
        } 
        setfilteredData(filtered);
    }

    return (
        <>
            <div className="w-full max-w-4xl mx-auto p-4"  style={{marginTop:"70px"}}>
                <div className="flex flex-col gap-y-16">
                    <div className="flex flex-row gap-8 text-center justify-center pt-10">
                        <input
                            type="search"
                            placeholder="Search by name"
                            value={selectedName}
                            onChange={handleSelectedData}
                            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 " />
                    </div>
                </div>
            </div>

            <table className="table table-light table-striped ">
                <thead>
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Beginner</th>
                        <th scope="col">Coder</th>
                        <th scope="col">Password</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((user) => (
                        <tr key={user._id}>
                            <th scope="row">{user.userid}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone_number}</td>
                            <td>{user.address}</td>
                            <td>{user.beginner ? "Yes" : "No"}</td>
                            <td>{user.coder ? "Yes" : "No"}</td>
                            <td>{user.password}</td>
                            <td>
                                <button className="btn btn-dark" onClick={() => updateList(user)} data-bs-toggle="modal" data-bs-target="#updateModal">Edit</button>
                                <button className="btn btn-secondary mx-2" onClick={() => deleteList(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Update Modal */}
            <div className="modal fade" id="updateModal" tabIndex={-1} aria-labelledby="updateModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="updateModalLabel">Update User Details</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="p-4" onSubmit={handleUpdate}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={currentUser?.name || ""}
                                        onChange={(e) => setCurrentUser({ ...currentUser!, name: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={currentUser?.email || ""}
                                        onChange={(e) => setCurrentUser({ ...currentUser!, email: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="number" className="form-label">Contact Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="number"
                                        value={currentUser?.phone_number || ""}
                                        onChange={(e) => setCurrentUser({ ...currentUser!, phone_number: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        value={currentUser?.address || ""}
                                        onChange={(e) => setCurrentUser({ ...currentUser!, address: e.target.value })}
                                    />
                                </div>
                                <div className="mb-2 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="beginner"
                                        checked={currentUser?.beginner || false}
                                        onChange={(e) => setCurrentUser({ ...currentUser!, beginner: e.target.checked })}
                                    />
                                    <label htmlFor="beginner" className="form-check-label">Beginner</label>
                                </div>
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="coder"
                                        checked={currentUser?.coder || false}
                                        onChange={(e) => setCurrentUser({ ...currentUser!, coder: e.target.checked })}
                                    />
                                    <label htmlFor="coder" className="form-check-label">Coder</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Update Details</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
