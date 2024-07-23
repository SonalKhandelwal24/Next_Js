import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name:"string",
    price:"string",
    category:"string",
    colour:"string",
    company:"string",
});

export const Product = mongoose.models.products || mongoose.model("products", productModel);