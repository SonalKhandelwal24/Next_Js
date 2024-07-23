import { connectionStr } from "@/app/util/db";
import { Product } from "@/app/util/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = [];
    try {
        console.log("connection = " + connectionStr);
        await mongoose.connect(connectionStr);
        data = await Product.find();
        console.log(data);
        return NextResponse.json({ result: data, success: true });
    } catch (e) {
        console.error("Error fetching products:", e);
        return NextResponse.json({ result: [], success: false, error : "Failed to fetch products" });
    }
}

export async function POST(request: any) {

    console.log("request ===" , request);
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    const product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({ result, success: true });

}
