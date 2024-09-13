import { userModel } from "../models/userModel";
import { dbConnect } from "../db/dbConnect";

export default async function AuthQuery(userId) {
  await dbConnect();

  try {
    if (userId) {
      const getUser = await userModel.findById(userId);

      const user = {
        fullName: getUser?.fName,
        avatar: getUser?.avatar,
        email: getUser?.email,
        id: getUser?._id.toString(),
      };

      return user;
    }
  } catch (err) {
    throw new Error(err.message);
  }
}
