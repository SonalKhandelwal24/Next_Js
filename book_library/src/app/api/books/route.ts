import { connectionBooks } from "@/lib/db";
import { Book } from "@/lib/model/book";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET () {

    let bookData = [];
    try{
        console.log("Database = " , connectionBooks);
        await mongoose.connect(connectionBooks);
        bookData =  await Book.find();
        console.log("All books = " , bookData);
        return NextResponse.json({ result: bookData, success : true }, { status : 200 });
    } catch(e) {
        console.error("Data fetching Error", e);
        return NextResponse.json({ result: "Data fetching error, please check", success : false }, { status : 400 });
    }
}

export async function POST (request: any) {

    // console.log("request =======" , request);
    const payload = await request.json();
    console.log("New book added = " , payload);
    
    await mongoose.connect(connectionBooks);
    const book = new Book(payload);
    const result = await book.save();
    return NextResponse.json({ result, success : true }, { status : 201 });
}

