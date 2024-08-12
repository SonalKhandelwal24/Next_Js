import mongoose from "mongoose";

const schema  = new mongoose.Schema({
    userid: { type: Number, required: true },
    name:  { type: String, required: true },
    email : { type: String, required: true },
    phone_number:  { type: Number, required: true },
    address: { type: String, required: true },
    beginner : { type: Boolean, required: true },
    coder: { type: Boolean, required: true },
    password: { type: Number, required: true }
});

export const ContactList = mongoose.models.users || mongoose.model('users', schema)