import { NextResponse } from "next/server";

export function GET(content : any) {

    console.log(content);
    let studentdetails = content.params.student;
    console.log(studentdetails);

    return NextResponse.json({result:studentdetails, success:true}, {status: 200})
    // return new Response("all routed catched");
}