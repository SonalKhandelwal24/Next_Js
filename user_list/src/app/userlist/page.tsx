// "use client";
// import { useEffect, useState } from "react";
// import { getalluser } from "../getuser/page";
// import Link from "next/link";

// export default function Home() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
//   const [username, setUsername] = useState("");
//   const [number, setNumber] = useState("");
//   const [status, setStatus] = useState("");
//   const [userdata, setUserdata] = useState([]);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const addDetails = async () => {
//     let data = await fetch('http://localhost:3000/api/users', {
//       method: "POST",
//       body: JSON.stringify({ username, number, status })
//     });
//     data = await data.json();
//     if (data.success) {
//       setUsername("");
//       setNumber("");
//       setStatus("");
//       fetchData(); // Fetch updated user data
//       closeModal();
//     }
//   };

//   const openUpdateModal = () => {
//     setIsUpdateModalOpen(true);
//   };

//   const closeUpdateModal = () => {
//     setIsUpdateModalOpen(false);
//   };

//   const updateDetails = () => {
//     // Add your logic here
//     console.log({ username, number, status });
//     closeUpdateModal();
//   };

//   const fetchData = async () => {
//     const data = await getalluser();
//     setUserdata(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center">
//       <div className="w-full max-w-4xl mx-auto p-4">
//         <div className="flex flex-col gap-y-16">
//           <div className="flex flex-row gap-8 text-center justify-center pt-10">
//             <input
//               type="search"
//               placeholder="Search"
//               className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//             />

//             <select className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
//               <option value="active">Active</option>
//               <option value="inactive">Inactive</option>
//             </select>

//             <button
//               onClick={openModal}
//               className="border-2 border-blue-500 rounded-md py-2 px-4 bg-blue-500 text-white transition"
//             >
//               Add
//             </button>
//           </div>

//           <table className="min-w-full bg-white border border-gray-300">
//             <thead className="bg-gray-200 border-b">
//               <tr>
//                 <th className="py-2 px-4 border-r">Id</th>
//                 <th className="py-2 px-4 border-r">Name</th>
//                 <th className="py-2 px-4 border-r">Phone number</th>
//                 <th className="py-2 px-4 border-r">Status</th>
//                 <th className="py-2 px-4 border-r">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {userdata.map((item) => (
//                 <tr className="border-b" key={item._id}>
//                   <td className="py-2 px-4 border-r">{item.userid}</td>
//                   <td className="py-2 px-4 border-r">{item.username}</td>
//                   <td className="py-2 px-4 border-r">{item.phone_number}</td>
//                   <td className="py-2 px-4 border-r">{item.status}</td>
//                   <td className="py-2 px-4 flex gap-x-10 border-r">
//                     <button
//                       onClick={openUpdateModal}
//                       className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 transition"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       // onClick={() => deleteData(item._id)}
//                       className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
//             <label className="block mb-2">Username:</label>
//             <input
//               type="text"
//               className="mb-4 w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//               value={username}
//               placeholder="Enter username"
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <label className="block mb-2">Phone Number:</label>
//             <input
//               type="text"
//               className="mb-4 w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//               value={number}
//               placeholder="Enter number"
//               onChange={(e) => setNumber(e.target.value)}
//               required
//             />
//             <div className="mb-4">
//               <span className="text-lg mr-4">Status:</span>
//               <label className="inline-flex items-center mr-4">
//                 <input
//                   type="radio"
//                   className="form-radio text-blue-500 h-4 w-4"
//                   name="status"
//                   value="active"
//                   checked={status === "active"}
//                   onChange={(e) => setStatus(e.target.value)}
//                 />
//                 <span className="ml-2">Active</span>
//               </label>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   className="form-radio text-blue-500 h-4 w-4"
//                   name="status"
//                   value="inactive"
//                   checked={status === "inactive"}
//                   onChange={(e) => setStatus(e.target.value)}
//                 />
//                 <span className="ml-2">Inactive</span>
//               </label>
//             </div>
//             <button
//               onClick={addDetails}
//               className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
//             >
//               Add Details
//             </button>
//             <button
//               onClick={closeModal}
//               className="w-full mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {isUpdateModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
//             <label className="block mb-2">Username:</label>
//             <input
//               type="text"
//               className="mb-4 w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//               value={username}
//               placeholder="Enter username"
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <label className="block mb-2">Phone Number:</label>
//             <input
//               type="text"
//               className="mb-4 w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//               value={number}
//               placeholder="Enter number"
//               onChange={(e) => setNumber(e.target.value)}
//               required
//             />
//             <div className="mb-4">
//               <span className="text-lg mr-4">Status:</span>
//               <label className="inline-flex items-center mr-4">
//                 <input
//                   type="radio"
//                   className="form-radio text-blue-500 h-4 w-4"
//                   name="status"
//                   value="active"
//                   checked={status === "active"}
//                   onChange={(e) => setStatus(e.target.value)}
//                 />
//                 <span className="ml-2">Active</span>
//               </label>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   className="form-radio text-blue-500 h-4 w-4"
//                   name="status"
//                   value="inactive"
//                   checked={status === "inactive"}
//                   onChange={(e) => setStatus(e.target.value)}
//                 />
//                 <span className="ml-2">Inactive</span>
//               </label>
//             </div>
//             <button
//               onClick={updateDetails}
//               className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
//             >
//               Update Details
//             </button>
//             <button
//               onClick={closeUpdateModal}
//               className="w-full mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
