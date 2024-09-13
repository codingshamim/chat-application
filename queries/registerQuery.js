import { responseObject } from "../actions";
import { dbConnect } from "../db/dbConnect";
import { userModel } from "../models/userModel";

export default async function registerQuery(user) {
  await dbConnect();
  try {
    const isExiting = await userModel.find({ email: user?.email });
    if (isExiting.length > 0) {
      return responseObject("bad", 401, "This User Already Exists!");
    }
    const response = await userModel.create(user);
    if (response) {
      return responseObject("ok", 200, "Successfully register", {
        id: response?._id.toString(),
      });
    } else {
      return responseObject("bad", 401, "Something Went Wrong");
    }
  } catch (err) {
    throw new Error("Something went wrong while register");
  }
}
