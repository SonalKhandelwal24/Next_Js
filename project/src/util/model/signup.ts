import mongoose from "mongoose";

const signupschema  = new mongoose.Schema({
    name : { type: String, required: true },
    email : { type: String, required: true },
    contact : { type: Number, required: true },
    password : { type: String, required: true },
});

export const SignupForm = mongoose.models.signups || mongoose.model('signups', signupschema)