"use client"
export default function Course({params}:any){
    return(
        <div>
            
        <h1>Company : {params.course[0]}</h1>
        <h1>Profile : {params.course[1]}</h1>
        <h1>Salary : {params.course[2]}</h1>
        <h1>Experience : {params.course[3]}</h1>
        </div>
    )
}