import { dbConnect } from "../db/dbConnect";
import { userModel } from "../models/userModel";

export default async function getUserQuery(userId) {
  await dbConnect();
  const user = await userModel.find({ _id: userId });
  console.log(user);
}
