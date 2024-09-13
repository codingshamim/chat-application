import mongoose, { Schema } from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  recipient: {
    type: String,
    required: true,
  },

  content: {
    type: String, // Stores the message content (for files, store URL)
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  seen: {
    type: Boolean,
    default: false,
  },
});

export const chatModel =
  mongoose.models.messages ?? mongoose.model("messages", messageSchema);
