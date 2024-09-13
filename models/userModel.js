import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  rksId: {
    required: false,
    type: String,
  },

  fName: {
    required: false,
    type: String,
  },
  email: {
    required: false,
    type: String,
  },

  password: {
    required: false,
    type: String,
  },

  avatar: {
    required: false,
    type: String,
  },
  role: {
    required: false,
    type: String,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
