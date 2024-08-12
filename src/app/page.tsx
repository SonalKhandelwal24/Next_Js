"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import { ChangeEvent, Key, SetStateAction, useEffect, useState } from "react";
import "./globals.css";
import Link from "next/link";

interface Passenger {
  userid: number;
  _id: Key | null | undefined;
  title: string;
  prename: string;
  name: string;
  category: string;
  age: number;
  gender: string;
}

export default function Home() {

  const [prename, setPre] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [userData, setUserData] = useState<Passenger[]>([]);
  const [filteredData, setfilteredData] = useState<Passenger[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<Passenger[] | null>(null);

  const getAllData = async () => {
    try {
      let response = await fetch(`http://localhost:3000/api/userlists`);
      response = await response.json();
      const data = response.result;
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    getAllData();
  }, []);

  const addDetails = async () => {
    let response = await fetch('http://localhost:3000/api/userlists', {
      method: "POST",
      body: JSON.stringify({ prename, name, category, age, gender })
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("HTTP error :", response.status, errorText);
      return;
    }
    const data = await response.json();
    console.log({ prename, name, category, age, gender });
    console.log("User added successfully:", data);
    if (data.success) {
      setPre("");
      setName("");
      setCategory("");
      setAge("");
      setGender("");
      getAllData();
    }
  }

  const updateList = async (user: Passenger) => {
    setCurrentUser(user);
  }

  const handleUpdate = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!currentUser) return;
    let response = await fetch(`http://localhost:3000/api/userlists/${currentUser._id}`, {
      method: "PUT",
      body: JSON.stringify(currentUser)
    });
    const data = await response.json();
    console.log(prename, name, category, age, gender);
    if (data.success) {
      getAllData();

    } else {
      console.error("Failed to update user details");
    }
  }

  const deleteList = async (id: Key) => {
    const response = await fetch(`http://localhost:3000/api/userlists/${id}`, {
      method: "DELETE"
    });
    const data = await response.json();
    if (data.success) {
      alert("user details deleted");
      getAllData();
    } else {
      console.error("Failed to delete user list");

    }
  }

  return (
    <>
      <div style={{ display: "flex", height: "100vh", gap: "10px" }}>
        {/* sidebar */}
        <div className="d-flex flex-column flex-shrink-0 bg-dark" style={{ width: "4.5rem", height: "100vh" }} >
          <Link href="/" className="d-block p-3 border-bottom link-secondary text-decoration-none text-light text-center" title="Home" data-bs-toggle="tooltip" data-bs-placement="right"
            data-bs-original-title="Icon-only">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-browser-chrome" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
            </svg>
          </Link>

          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item">
              <Link href="#" className="nav-link py-3 border-bottom link-secondary text-decoration-none text-light" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right"
                data-bs-original-title="Home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link py-3 link-secondary border-bottom text-decoration-none text-light" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16" >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link py-3 link-secondary border-bottom text-decoration-none text-light" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16" >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link py-3 border-bottom  text-decoration-none text-light" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "calc(100% - 57px)", }} >
          <div className="card" style={{ height: "200px", position: "relative" }} >
            {/* Upper card content */}
            <div className="text-white bg-dark"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
                height: "100%",
                borderRadius: "5px"
              }}
            >
              <div className="card-body" style={{ flex: "1 1 auto" }}>
                <h6 className="card-title">Potter Travels(tbo)</h6>
                <p className="text-secondary">Go somewhere</p>
              </div>
              <div className="card-body" style={{ flex: "1 1 auto" }}>
                <h6 className="card-title" style={{ color: "#6675BC" }}>
                  Boarding
                </h6>
                <p style={{ color: "#9C7BAC" }}>8:00 pm</p>
                <p className="">8 August</p>
              </div>
              <div className="card-body" style={{ flex: "1 1 auto" }}>
                <h6 className="card-title text-success">Potter Travels(tbo)</h6>
                <p className="text-secondary">today</p>
              </div>
              <div className="card-body" style={{ flex: "1 1 auto" }}>
                <h6 className="card-title" style={{ color: "#B74C38" }}>
                  Dropping
                </h6>
                <p style={{ color: "#9C7BAC" }}>5:00 pm</p>
                <p className="text-__className_36bd41">9 August</p>
              </div>
            </div>
          </div>

          {/* lower card */}
          <div className="card" style={{ height: "calc(100vh - 200px)", position: "relative" }}>
            <div className="text-white bg-dark" style={{ display: "flex", justifyContent: "center", paddingTop: "20px", gap: "25px", height: "100%", borderRadius: "5px" }}>
              <div className="accordion" id="accordionExample" style={{ width: "calc(100% - 60px)" }}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={{ backgroundColor: "#65699C", color: "white", boxShadow: "none" }} type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Add Passenger </button>
                  </h2>

                  {/* one row */}
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                    <div className="accordion-body" style={{ backgroundColor: "#23272F" }}>
                      <h6 className="text-light">Add Passenger 1</h6>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
                        <select className="form-select" aria-label="Default select example" style={{ maxWidth: "100px", boxShadow: "none" }} value={prename} onChange={(e) => setPre(e.target.value)}>
                          <option value="" selected>Select</option>
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Ms">Ms</option>
                        </select>
                        <input
                          type="text" style={{ borderRadius: "5px", border: "none", padding: "5px 10px", outline: "none", backgroundColor: "GrayText", color: "white", }}
                          placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input
                          type="text" style={{ borderRadius: "5px", border: "none", padding: "5px 10px", outline: "none", backgroundColor: "GrayText", color: "white" }}
                          placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                        <input
                          type="text" style={{ borderRadius: "5px", border: "none", padding: "5px 10px", outline: "none", backgroundColor: "GrayText", color: "white" }}
                          placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                        {/* <div>
                          <input className={`btn gender-btn ${gender === "Male" ? "btn-primary" : "btn-secondary"}`} type="button" value="Male"
                            onClick={() => setGender("Male")} />
                          <input className={`btn gender-btn mx-2 ${gender === "Female" ? "btn-primary" : "btn-secondary"}`} type="button" value="Female"
                            onClick={() => setGender("Female")} />
                        </div> */}
                        <select className="form-select" aria-label="Default select example" style={{ maxWidth: "150px", boxShadow: "none" }} value={gender} onChange={(e) => setGender(e.target.value)}>
                          <option value="" selected>Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Transgender">Transgender</option>
                        </select>

                      <input type="button" value="Submit" className="btn text-light" style={{ backgroundColor: "#6675BC", margin:"auto" }} onClick={addDetails} />

                      </div>
                      {error && <div className="text-danger mt-3">{error}</div>}
                    </div>
                  </div>

                  {/* <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                    <div className="accordion-body" style={{ backgroundColor: "#23272F", textAlign: "center" }}>
                    </div>
                  </div> */}

                </div>

                {/* Additional accordion items */}
                <div className="accordion-item" style={{ borderRadius: "0px" }}>
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      style={{ backgroundColor: "#65699C", color: "white", boxShadow: "none" }}
                      className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Passenger details
                    </button>
                  </h2>

                  {/* first row */}
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" >
                    <div className="accordion-body" style={{ backgroundColor: "#23272F" }}>

                      <table className="table table-dark table-striped">
                        <thead>
                          <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Pre</th>
                            <th scope="col">Username</th>
                            <th scope="col">Category</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userData.map((user) => (
                            <tr key={user._id}>
                              <th scope="row">{user.userid}</th>
                              <td>{user.prename}</td>
                              <td>{user.name}</td>
                              <td>{user.category}</td>
                              <td>{user.age}</td>
                              <td>{user.gender}</td>
                              <td>
                                <button className="btn btn-dark" onClick={() => updateList(user)} data-bs-toggle="modal" data-bs-target="#updateModal">
                                  Edit
                                </button>
                                <button className="btn btn-danger mx-2" onClick={() => deleteList(user._id)}>
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="modal fade" id="updateModal" tabIndex={-1} aria-labelledby="updateModalLabel" aria-hidden="true">
                        <div className="modal-dialog ">
                          <div className="modal-content bg-dark text-light">
                            <div className="modal-header">
                              <h4 className="modal-title" id="updateModalLabel">Update User Details</h4>
                              <button type="button" className="btn-close" style={{backgroundColor:"white"}} data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <form className="p-4" onSubmit={handleUpdate}>
                                <div className="mb-3">
                                  <label htmlFor="name" className="form-label">Username</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={currentUser?.name || ""}
                                    onChange={(e) => setCurrentUser({ ...currentUser!, name: e.target.value })}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="category" className="form-label">Category</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="category"
                                    value={currentUser?.category || ""}
                                    onChange={(e) => setCurrentUser({ ...currentUser!, category: e.target.value })}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="age" className="form-label">Age</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="age"
                                    value={currentUser?.age || ""}
                                    onChange={(e) => setCurrentUser({ ...currentUser!, age: e.target.value })}
                                  />
                                </div>
                                <div className="mb-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                  <select className="form-select" aria-label="Default select example" style={{ maxWidth: "150px", boxShadow: "none" }} value={currentUser?.gender || ""} 
                                      onChange={(e) => setCurrentUser({ ...currentUser!, gender: e.target.value })}>
                                    <option value="" selected>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Transgender">Transgender</option>
                                  </select>
                                </div>
                                  <div style={{margin:"auto", display:"flex", gap:"15px"}}>
                                        <button type="submit" className="btn btn-primary">Update Details</button>
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
