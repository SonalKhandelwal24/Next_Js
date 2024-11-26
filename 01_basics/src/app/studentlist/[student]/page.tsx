"use client"
export default function Student({params}:any){

    console.log(params)
    return(
        <div>
         <h1>Student details :</h1>
         <h2> {params.student}</h2>
        </div>
    )
     
}