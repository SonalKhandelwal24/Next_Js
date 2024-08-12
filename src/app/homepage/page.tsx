"use client";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import { useEffect, useState } from "react";
import "./../globals.css";
import Link from "next/link";

export default function Page() {

  const [data, setData] = useState([]);
  const [city, setcity] = useState('Delhi');
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false); // New state

  useEffect(() => {
    setIsClient(true); // Mark as client-side
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  const searchCity = async (city: string, type: string) => {
    const response = await fetch('http://192.168.1.104:5001/search/city', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },  
      body: JSON.stringify({
        city: city,
        type: type,
      }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    const formattedResult = result.map((item: { CityName: String; }) => {
      return { label: item.CityName };
    });
    console.log("Formatted Result:", formattedResult); // Ensure this logs the correct structure
    return formattedResult;
  };

  useEffect(() => {
    const fetchData = async (city: string | undefined) => {
      try {
        const result = await searchCity(city || "", "cache");
        console.log("Fetched Data:", result);
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError('Failed to fetch data');
      }
    };

    fetchData(city);
  }, [city]);

  return (
    <>
      <div>
        {/* lower card */}
        <div className="card" >
          <div className="text-white bg-dark" style={{ display: "flex", justifyContent: "center", paddingTop: "20px", gap: "25px", borderRadius: "5px", height: "100vh" }}>
            <div className="accordion" id="accordionExample" style={{ width: "calc(100% - 60px)" }}>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" style={{ backgroundColor: "#65699C", color: "white", boxShadow: "none" }} type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Add Passenger
                  </button>
                </h2>

                {/* one row */}
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                  <div className="accordion-body" style={{ backgroundColor: "#23272F", display: "flex", flexDirection: "column", gap: "20px", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px" }}>
                    <h6 className="text-light">Add Passenger 1</h6>

                    <div style={{ display: "flex", flexDirection: "row", gap: "50px", justifyContent: "center" }}>
                      <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <label className="text-light">From :</label>
                        {/* <input type="text" value={city} onChange={(e) => setcity(e.target.value)} />
                        <div>
                          <ul>
                            {data.map((items) => (
                              <li>{items}</li>
                            ))}
                          </ul>
                        </div> */}

                        {isClient && ( // Conditionally render Autocomplete on client-side only
                            <Autocomplete
                              disablePortal
                              className=' bg-light'
                              id="combo-box-demo"
                              value={city}
                              onChange={(event, newValue) => setcity(newValue?.label || "")} // Update city with the label or empty string
                              options={data}
                              // onClick={() => fetchData(city)}
                              getOptionLabel={(option) => option.label || ""} // Use getOptionLabel to specify label field
                              sx={{ width: 300 }}
                              renderInput={(params: any) => <TextField {...params} placeholder='Select City' />}
                            />
                          )}
                      </div>


                      <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <label className="text-light">To :</label>
                        {isClient && ( // Conditionally render Autocomplete on client-side only
                            <Autocomplete
                              disablePortal
                              className=' bg-light'
                              id="combo-box-demo"
                              value={city}
                              onChange={(event, newValue) => setcity(newValue?.label || "")} // Update city with the label or empty string
                              options={data}
                              getOptionLabel={(option) => option.label} // Use getOptionLabel to specify label field
                              sx={{ width: 300 }}
                              renderInput={(params: any) => <TextField {...params} placeholder='Select City' />}
                            />
                          )}
                      </div>
                    </div>
                    {error && <p className="text-danger">{error}</p>}

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
