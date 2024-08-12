"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { getalluser } from "./getuser/page";

// Define TypeScript interfaces for user data
interface User {
  _id: string;
  userid: string;
  username: string;
  phone_number: string;
  status: string;
}

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userid, setUserid] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phone_number, setPhonenumber] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [userdata, setUserdata] = useState<User[]>([]);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>("");
  const [selectedName, setselectedName] = useState<string>("");
  const [filteredData, setfilteredData] = useState<User[]>([]);
  const [selectStatus, setselectStatus] = useState<string>("");

  const fetchData = async () => {
    const data = await getalluser();
    setUserdata(data);
    setfilteredData(data);       // Initialize filtered data
  };

  useEffect(() => {
    fetchData()
  }, []);

  const handleSelectedData = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setselectedName(name);
    let filtered = userdata;
    if (name !== "") {
      filtered = filtered.filter((user) => 
        user.username.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (selectStatus !== "") {
      filtered = filtered.filter((user) => user.status === selectStatus);
    }
    setfilteredData(filtered);
  }

  const handleSelectedStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    const changestatus = e.target.value;
    setselectStatus(changestatus);
    let filtered = userdata;
    if (changestatus !== "") {
      filtered = filtered.filter((user) => user.status === changestatus);
    }
    if (selectedName !== "") {
      filtered = filtered.filter((user) =>
        user.username.toLowerCase().includes(selectedName.toLowerCase())
      );
    }
    setfilteredData(filtered);
  }

  const addDetails = async () => {
    let response = await fetch('http://localhost:3000/api/users', {
      method: "POST",
      body: JSON.stringify({ username, phone_number, status })
    });
    let data = await response.json();
    if (data.success) {
      setUsername("");
      setPhonenumber("");
      setStatus("");
      fetchData(); // Fetch updated user data
      closeModal();
    }
  };

  const updateDetails = async (id : string) => {
    let response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ userid, username, phone_number, status })
    });
    let data = await response.json();
    if (data.success) {
      setUserid("");
      setUsername("");
      setPhonenumber("");
      setStatus("");
      fetchData(); // Fetch updated user data
      closeModal();
    }
  };

  const deleteData = async (id : string) => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "DELETE"
    })
    const record = await data.json();
    if (record.success) {
      alert("User details are deleted");
      fetchData();
    } else {
      console.error("Failed to delete user data ");
    }
  }

  const openModal = (isUpdate: boolean = false, user : User = {} as User) => {
    setIsUpdate(isUpdate);
    if (isUpdate && user._id) {
      setCurrentId(user._id);
      setUserid(user.userid);
      setUsername(user.username);
      setPhonenumber(user.phone_number);
      setStatus(user.status);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUsername("");
    setPhonenumber("");
    setStatus("");
    setIsUpdate(false);
    setCurrentId("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-row gap-8 text-center justify-center pt-10">
            <input
              type="search"
              placeholder="Search by name"
              value={selectedName}
              onChange={handleSelectedData}
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />

            <select className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" onChange={handleSelectedStatus} >
              <option value="">Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button
              onClick={() => openModal(false)}
              className="border-2 border-blue-500 rounded-md py-2 px-4 bg-blue-500 text-white transition"
            >
              Add
            </button>
          </div>

          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-600 text-gray-200 tborder-b">
              <tr>
                <th className="py-2 px-4 border-r">Id</th>
                <th className="py-2 px-4 border-r">Name</th>
                <th className="py-2 px-4 border-r">Phone number</th>
                <th className="py-2 px-4 border-r">Status</th>
                <th className="py-2 px-4 border-r">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr className="border-b" key={item._id}>
                  <td className="py-2 px-4 border-r">{item.userid}</td>
                  <td className="py-2 px-4 border-r">{item.username}</td>
                  <td className="py-2 px-4 border-r">{item.phone_number}</td>
                  <td className="py-2 px-4 border-r">{item.status}</td>
                  <td className="py-2 px-4 flex gap-x-10 border-r">
                    <button
                      onClick={() => openModal(true, item)}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteData(item._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <label className="block mb-2">Username:</label>
            <input
              type="text"
              className="mb-4 w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label className="block mb-2">Phone Number:</label>
            <input
              type="text"
              className="mb-4 w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              value={phone_number}
              placeholder="Enter number"
              onChange={(e) => setPhonenumber(e.target.value)}
              required
            />
            <div className="mb-4">
              <span className="text-lg mr-4">Status:</span>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  className="form-radio text-blue-500 h-4 w-4"
                  name="status"
                  value="Active"
                  checked={status === "Active"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <span className="ml-2">Active</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500 h-4 w-4"
                  name="status"
                  value="Inactive"
                  checked={status === "Inactive"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <span className="ml-2">Inactive</span>
              </label>
            </div>
            <button
              onClick={isUpdate ? () => updateDetails(currentId) : addDetails}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
            >
              {isUpdate ? "Update Details" : "Add Details"}
            </button>
            <button
              onClick={closeModal}
              className="w-full mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

