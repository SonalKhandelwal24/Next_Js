import mongoose from "mongoose";

const loginschema  = new mongoose.Schema({
    email : { type: String, required: true },
    password : { type: String, required: true },
});

export const LoginForm = mongoose.models.logins || mongoose.model('logins', loginschema)