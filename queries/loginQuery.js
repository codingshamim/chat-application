import { dbConnect } from "../db/dbConnect";
import { userModel } from "../models/userModel";

export default async function loginQuery(user) {
  await dbConnect();
  try {
    const exitingUser = await userModel.find({
      email: user.email.trim(),
      password: user.password.trim(),
    });
    if (exitingUser.length > 0) {
      return {
        status: "ok",
        id: exitingUser[0]?._id.toString(),
      };
    } else {
      return {
        status: "bad",
        message: "Invalid Email and password",
      };
    }
  } catch {
    throw new Error("Something went wrong !");
  }
}
