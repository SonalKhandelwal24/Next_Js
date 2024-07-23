import { connectionStr } from "@/app/util/db";
import { Product } from "@/app/util/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request: { json: () => any; }, { params }: { params: { productid: string; }; }) {
   const productId = params.productid;
   console.log(`================ ${productId}`);
   const filter = { _id: productId };
   const payload = await request.json();
   console.log(payload);
   await mongoose.connect(connectionStr);
   const result = await Product.findOneAndUpdate(filter, payload);
   return NextResponse.json({ result, success: true })
}

export async function GET(request: { json: () => any; }, { params }: { params: { productid: string; }; }) {
   const productId = params?.productid;
   if (!productId) {
      return NextResponse.json({ success: false, error: "Product ID does not found" });
   }
   console.log(`================ ${productId}`);
   const record = { _id: productId };
   console.log(record);
   await mongoose.connect(connectionStr);
   const result = await Product.findById(record);
   return NextResponse.json({ result, success: true })
}

export async function DELETE (request, content) {
   
   const productId = content.params.productid;
   const record = { _id: productId };
   await mongoose.connect(connectionStr);
   const result = await Product.deleteOne(record);
   return NextResponse.json({ result, success: true })

}
