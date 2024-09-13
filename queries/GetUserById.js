import { dbConnect } from "../db/dbConnect";
import { userModel } from "../models/userModel";
import mongoToJsObject from "../utils/mongoToJsObject";

export default async function GetUserById(userId) {
  await dbConnect();
  try {
    const user = await userModel.findById(userId).select("-password");
    return mongoToJsObject(user);
  } catch {
    throw new Error("Something Went wrong");
  }
}
