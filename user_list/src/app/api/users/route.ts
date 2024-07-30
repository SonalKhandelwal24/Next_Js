import { userConnection } from "@/util/db";
import { UserData } from "@/util/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {

    console.log(userConnection);
    await mongoose.connect(userConnection, {
        serverSelectionTimeoutMS: 5000 // Increase the timeout to 5000ms (5 seconds)
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB', err);

    });

    const data = await UserData.find();
    // console.log(data);    
    return NextResponse.json({ result: data, success: true }, { status: 200 })

}
export async function POST(request, content) {

    const payload = await request.json();
    await mongoose.connect(userConnection);
    const maxuser = await UserData.findOne({}).sort({ userid: -1 }).exec();
    console.log('Max User:', maxuser);

    // Determine the next user ID
    let nextuserId;
    if (maxuser && maxuser.userid) {
        nextuserId = maxuser.userid + 1;
    } else {
        nextuserId = 1;
    }
    console.log('Next User ID:', nextuserId);

    // Add the new user ID to the payload
    payload.userid = nextuserId;
    const data = new UserData(payload);
    const result = await data.save();
    // console.log(data);    
    return NextResponse.json({ result, success: true }, { status: 201 })

}


