import { userConnection } from "@/util/db";
import { passengerData } from "@/util/model/userlist";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT (request, { params }) 
{
    const usersid = params.updatelist;
    console.log("id======" + usersid);
    const filter = {_id : usersid};
    const payload = await request.json();
    console.log(payload);
    await mongoose.connect(userConnection);
    const data = await passengerData.findOneAndUpdate( filter, payload);
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}

export async function GET (request, { params }) 
{
    const usersid = params.updatelist;
    console.log("id======" + usersid);
    const filter = {_id : usersid};
    await mongoose.connect(userConnection);
    const data = await passengerData.findOne( filter);
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}

export async function DELETE (request, { params }) 
{
    const usersid = params.updatelist;
    console.log("id======" + usersid);
    const filter = {_id : usersid};
    await mongoose.connect(userConnection);
    const data = await passengerData.findOneAndDelete( filter);
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}

