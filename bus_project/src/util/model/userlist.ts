import mongoose from "mongoose";

const schema  = new mongoose.Schema({
    userid: { type: Number, required: true },
    prename: { type: String, required: true },
    name:  { type: String, required: true },
    category:  { type: String, required: true },
    age: { type: Number, required: true },
    gender : { type: String, required: true },
});

export const passengerData = mongoose.models.userlists || mongoose.model('userlists', schema)