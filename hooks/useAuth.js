import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  return { user, setUser };
}
