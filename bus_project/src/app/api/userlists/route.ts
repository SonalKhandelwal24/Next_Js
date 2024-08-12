import { userConnection } from "@/util/db";
import { passengerData } from "@/util/model/userlist";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET () {

    try{
        await mongoose.connect(userConnection);
        const data =  await passengerData.find();
        return NextResponse.json({ result : data, success: true }, { status:200 })
    } catch(e) {
        return NextResponse.json({ result : [] , success: false, error:"Failed to fetch products" }, { status:400 })
    }
}

export async function POST (request) {

    let payload = await request.json();

    await mongoose.connect(userConnection);
    const maxuser = await passengerData.findOne({}).sort({ userid: -1 }).exec();
    console.log("MAXUSER" ,maxuser);
    
    let nextuserid;
    if(maxuser || maxuser.userid){
        nextuserid = maxuser.userid + 1 ;
    } else{
        nextuserid = 1;
    }
    console.log("Next User ID", nextuserid);
    payload.userid = nextuserid;
    const data =  new passengerData(payload);
    const response = await data.save();
    return NextResponse.json({ result: response, success: true }, { status:200 })
}