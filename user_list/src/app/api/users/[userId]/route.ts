import { userConnection } from "@/util/db";
import { UserData } from "@/util/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


async function connectToDatabase() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(userConnection, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, // 10 seconds
        });
    }
}

export async function PUT(request, { params }) {
    try {
        const uid = params.userId;
        const filter = { _id: uid };
        const payload = await request.json();

        await connectToDatabase();
        const data = await UserData.findOneAndUpdate(filter, payload, { new: true });

        return NextResponse.json({ result: data, success: true }, { status: 200 });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}


export async function GET (request, {params}) {
    try {
        const uid = params?.userId;
        if (!uid) {
            return NextResponse.json({ result: "Id not found", success: false, error: "User ID not found" }, { status: 400 });
        }

        const record = { _id: uid };
        await connectToDatabase();
        const data = await UserData.findOne(record);

        return NextResponse.json({ result: data, success: true }, { status: 200 });
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function DELETE (request, {params}) {

    try{
        const uid = params.userId;
        const record = { _id: uid };
        console.log(record);
        await connectToDatabase();
        const data = await UserData.findOneAndDelete(record);
        return NextResponse.json({result:data, success:true }, {status:200})
    }   catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

