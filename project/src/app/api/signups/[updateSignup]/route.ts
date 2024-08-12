import { userConnection } from "@/util/db";
import { SignupForm } from "@/util/model/signup";
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
    const data = await SignupForm.findOneAndUpdate( filter, payload);
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}

export async function GET (request, { params }) 
{
    const contid = params.updateUser;
    console.log("id======" + contid);
    const filter = {_id : contid};
    await mongoose.connect(userConnection);
    const data = await SignupForm.findOne( filter);
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}

export async function DELETE (request, { params }) 
{
    const contid = params.updateUser;
    console.log("id======" + contid);
    const filter = {_id : contid};
    await mongoose.connect(userConnection);
    const data = await SignupForm.findOneAndDelete( filter);
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}

