import { userConnection } from "@/util/db";
import { LoginForm } from "@/util/model/login";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(userConnection);
    const data = await LoginForm.find();
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}

export async function POST(request, { params }) 
{
    const payload = await request.json();
    console.log(payload);
    await mongoose.connect(userConnection);
    const maxUser = await LoginForm.findOne({}).sort({userid: -1 }).exec();
    console.log("maxuser " + maxUser);
    
    let nextuserid;
    if(maxUser && maxUser.userid){
        nextuserid = maxUser.userid + 1;
    } else{
        nextuserid = 1;
    }
    payload.userid = nextuserid;
    console.log(payload);  

    const data = new LoginForm(payload);
    const result = await data.save();
    return NextResponse.json({ result: result, success: true }, { status: 201 })
}