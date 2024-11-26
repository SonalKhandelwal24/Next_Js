import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET () {
    const data = user;
    return NextResponse.json(data, {status:200})
    // return NextResponse.json({name:"sonal", age:"21", city:"Gurgaon"}, {status:200})
}

export async function POST (request : any) {
    const payload = await request.json();
    console.log(`Name : ${payload.name} , Email : ${payload.email} , Age : ${payload.age}`);

    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result: "required field not found", success: false }, {status:400})
    }
    return NextResponse.json({result: "new user created successfully", success: true }, {status:201})
}