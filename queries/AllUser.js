import { dbConnect } from "../db/dbConnect";
import { userModel } from "../models/userModel";
import mongoToJsObject from "../utils/mongoToJsObject";

export default async function AllUser() {
  await dbConnect();
  try {
    const users = await userModel.find().select("-password");
    const convert = mongoToJsObject(users);
    return convert;
  } catch {
    throw new Error("Something went wrong");
  }
}
