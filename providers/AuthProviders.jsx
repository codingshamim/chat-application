"use client";

import { createContext, useEffect, useState } from "react";
import { Auth } from "../actions";
export const AuthContext = createContext(null);
export default function AuthProviders({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userId = localStorage.getItem("user");
    async function getUser() {
      const userObj = await Auth(userId);
      setUser(userObj);
    }

    getUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
