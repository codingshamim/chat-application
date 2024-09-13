"use server";

import AuthQuery from "../queries/AuthQuery";
import GetMessageQuery from "../queries/GetMessageQuery";
import GetUserById from "../queries/GetUserById";
import loginQuery from "../queries/loginQuery";
import registerQuery from "../queries/registerQuery";
import SendMessageQuery from "../queries/SendMessageQuery";

export const responseObject = (stat, code, msg, obj) => {
  return {
    status: stat,
    code: code,
    message: msg,
    isObject: obj,
  };
};
export async function registerAction(state, fileName) {
  try {
    const fName = state?.fName.trim();
    const email = state?.email.trim();
    const password = state?.password.trim();
    if (fName.length === 0 || email.length === 0 || password.length === 0) {
      return responseObject("bad", 401, "All are Field Required!");
    } else {
      const response = await registerQuery({
        fName,
        email,
        password,
        avatar: fileName,
      });

      return response;
    }
  } catch (err) {
    throw err.message;
  }
}
export async function Auth(userId) {
  try {
    if (userId) {
      const user = await AuthQuery(userId);
      return user;
    }
  } catch (err) {
    throw err;
  }
}

export async function loginAction(user) {
  try {
    const response = await loginQuery(user);
    return response;
  } catch (err) {
    throw err.message;
  }
}
export async function sendMessage(chat) {
  const response = await SendMessageQuery(chat);
}

export async function getUserByIdAction(userId) {
  const response = GetUserById(userId);
  return response;
}
export async function getMessages(loggedUser, recId) {
  const response = await GetMessageQuery(loggedUser, recId);
  return response;
}
