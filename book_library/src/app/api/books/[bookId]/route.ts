import { connectionBooks } from "@/lib/db";
import { Book } from "@/lib/model/book";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request: any, content: any) {
    const bookid = content.params.bookId;
    const filter = { _id: bookid };
    console.log("Fetching Book id = ", filter);
    const payload = await request.json();
    console.log("Updated book data = ", payload);
    await mongoose.connect(connectionBooks);
    const updatedData = await Book.findOneAndUpdate(filter, payload);
    return NextResponse.json(
        { result: updatedData, success: true },
        { status: 201 }
    );
}

export async function GET(request: any, content: any) 
{
    const bookid = content.params?.bookId;
    if (!bookid) {
        return NextResponse.json({ result: "Id not found", success: false, error: "Book ID does not found" }, { status: 400 });
    }
    const record = { _id: bookid };
    console.log("Fetching Book record = ", record);
    try {
        await mongoose.connect(connectionBooks);
        const findBook = await Book.findById(record);
        if (!findBook) {
            return NextResponse.json({ result: null, success: false, error: "Book not found" }, { status: 400 });
        }
        return NextResponse.json({ result: findBook, success: true }, { status: 201 });
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ result: null, success: false, error :"Internal server error" }, { status: 500 });
    }
}

export async function DELETE(request: any, content: any) {
    const bookid = content.params.bookId;
    const filter = { _id: bookid };
    await mongoose.connect(connectionBooks);
    const deletedData = await Book.findByIdAndDelete(filter);
    console.log(deletedData);
    if(deletedData){
        return NextResponse.json({ result: deletedData, success: true, message: 'Book deleted successfully' }, { status: 201 });
    }
    else {
        return NextResponse.json({ message: 'Book not found' }, { status: 404 });
      }
}
