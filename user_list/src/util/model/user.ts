import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userid: { type: Number, required: true },
  username: { type: String, required: true },
  phone_number: { type: Number, required: true },
  status: { type: String, required: true }
});

export const UserData = mongoose.models.users || mongoose.model('users', userSchema);
