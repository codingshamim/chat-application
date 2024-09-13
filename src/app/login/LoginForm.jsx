"use client";

import LoadingButton from "@/_components/common/LoadingButton";
import { useState } from "react";
import { loginAction } from "../../../actions";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await loginAction(state);
      if (response.status === "ok") {
        router.push("/");
        localStorage.setItem("user", response?.id);
      } else {
        setError(response?.message);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleLogin}>
      {" "}
      {error && <p className="text-red-500">{error}</p>}
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Your Email"
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="********"
        />
      </div>
      <div>
        <p>
          New Here ?{" "}
          <Link href="/register" className="text-primary">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="form-control">
        <LoadingButton loading={loading}>Login</LoadingButton>
      </div>
    </form>
  );
}
