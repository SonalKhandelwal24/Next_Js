import { userConnection } from "@/util/db";
import { ContactList } from "@/util/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT (request, { params }) 
{
    const contid = params.updateUser;
    console.log("id======" + contid);
    const filter = {_id : contid};
    const payload = await request.json();
    console.log(payload);
    await mongoose.connect(userConnection);
    const data = await ContactList.findOneAndUpdate( filter, payload);
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}

export async function GET (request, { params }) 
{
    const contid = params.updateUser;
    console.log("id======" + contid);
    const filter = {_id : contid};
    await mongoose.connect(userConnection);
    const data = await ContactList.findOne( filter);
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}

export async function DELETE (request, { params }) 
{
    const contid = params.updateUser;
    console.log("id======" + contid);
    const filter = {_id : contid};
    await mongoose.connect(userConnection);
    const data = await ContactList.findOneAndDelete( filter);
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}

