import { dbConnect } from "../db/dbConnect";
import { chatModel } from "../models/chatModel";

export default async function SendMessageQuery(msg) {

  await dbConnect();
  const schema = {
    sender: msg?.chatDetails?.loggedUser,
    recipient: msg?.chatDetails?.chatUser,
    content: msg?.input,
  };
  const response = await chatModel.create(schema);
 
}
