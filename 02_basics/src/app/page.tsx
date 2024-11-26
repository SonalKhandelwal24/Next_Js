import { API_BASE_URL } from "@/config/constant";

export default function Home() {

  //this console prints in terminal not in a browser console
  console.log(process.env.CUSTOM_MODE)
  
  return (
    <main>
      <h1>Environment Variables in Next js</h1>
      {
        process.env.NODE_ENV == "development" ?
        <h1 className="text-lg">In a developemnt mode</h1>
        : 
        <h1 className="text-lg" >In a production mode</h1>
      }

      <h1> {API_BASE_URL} </h1>
      
     {/* <h1>User details</h1> */}
    </main>
  );
}
