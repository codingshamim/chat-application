import { dbConnect } from "../db/dbConnect";
import { chatModel } from "../models/chatModel";
import mongoToJsObject from "../utils/mongoToJsObject";

export default async function GetMessageQuery(userId, recipientId) {
  await dbConnect();
  const messages = await chatModel
    .find({
      $or: [
        { sender: userId, recipient: recipientId },
        { sender: recipientId, recipient: userId },
      ],
    })
    .sort({ timestamp: 1 });
  return mongoToJsObject(messages);
}
