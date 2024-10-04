"use client"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "../components/sidebar";
import Header from "../components/header";

export default function Home() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [userRole, setUserRole] = useState(null); 
  // const [loading, setLoading] = useState(true); 
  
  // useEffect(() => {
  //   const getdata = async () => {
  //     try {
  //       const response = await fetch('http://192.168.1.64:3000/auth/login');
  //       if (!response.ok) throw new Error("Network response was not ok");
        
  //       const data = await response.json();
  //       console.log("DATA:", data);
        
  //       if (data) {
  //         const role = data.user.role;
  //         setUserRole(role);
  //       }
  //     } catch (error) {
  //       console.error("Fetch error:", error);
  //       toast.error("Error fetching user data. Please try again.");
  //     } finally {
  //       setLoading(false); // Set loading to false after fetch
  //     }
  //   };

  //   getdata();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>; // Show loading state
  // }

  const addAttendance = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://192.168.1.64:3000/attendance',
        {
          method: "Post",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, username, email, phone_number })
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.log("HTTP error :", response.status, errorText);
        return;
      }
      const data = await response.json();
      if (data) {
        setName("");
        setUsername("");
        setEmail("");
        setPhone("");
        toast.success("User submitted the form succesfully!!!");
      } else {
        toast.warning("User does not submitted the form succesfully!!!");
      }

    }
    catch (e) {
      toast.error("User does not submitted the form succesfully!!!");
      console.log("Error message", e);
    }
  }

  return (
    <main>

      <ToastContainer position="top-right" />
      <div className='d-flex gap-1 flex-row text-white' style={{ backgroundColor: "rgb(18 18 18)" }}>
        <Sidebar />

        <div className='d-flex gap-1 flex-column w-100'>
          <Header />

          <div className="w-100 d-flex justify-content-center align-items-center mt-5 mb-5 flex-column gap-5 ">
            <form className="w-50 d-flex flex-column border border-light p-5 rounded shadow-lg text-dark" onSubmit={addAttendance}
              style={{ backgroundColor: "#FFFFFF" }}>
              <h1 className="mb-5">Attendance Form</h1>

              <div className="mb-3 ">
                <label htmlFor="name" className="form-label ">Name</label>
                <input type="text" className="form-control" style={{ backgroundColor: "#DCDCDE" }} id="name" aria-describedby="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
              </div>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" style={{ backgroundColor: "#DCDCDE" }} id="username" aria-describedby="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" style={{ backgroundColor: "#DCDCDE" }} id="email" aria-describedby="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" style={{ backgroundColor: "#DCDCDE" }} id="phone" minLength={10} aria-describedby="phone" value={phone_number} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>

    </main>
  )
}
