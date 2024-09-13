"use client";

import profileImg from "@/_components/profileImgUrl";
import Image from "next/image";
import { useRef, useState } from "react";
import { registerAction } from "../../../actions";
import LoadingButton from "@/_components/common/LoadingButton";
import { useRouter } from "next/navigation";
import setCookie from "../../../utils/setcookie";
import Link from "next/link";

export default function RegisterForm() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    fName: "",
    email: "",
    password: "",
  });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setError(null);
    setSuccess(null);
    setState({
      ...state,
      [name]: value,
    });
  }

  function handleUploadImg() {
    fileRef.current.click();
  }
  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (!file) {
        setError("Please Select Profile Picture");
      } else {
        const data = new FormData();
        data.set("file", file);
        const result = await fetch("http://localhost:3000/api/upload", {
          method: "POST",

          body: data,
        });
        const json = await result.json();
        if (json.status === "ok") {
          const response = await registerAction(state, json?.fileName);
          if (response?.status === "ok") {
            router.push("/");
            localStorage.setItem("user", response?.isObject?.id);
          } else {
            setError(response?.message);
          }
        }
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  function handleFileChange(e) {
    const selectedFile = e.target.files?.[0];
    setFile(e.target.files?.[0]);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  }
  return (
    <form onSubmit={handleRegister}>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <div className="form-control">
        <label htmlFor="fName">Name</label>
        <input
          type="text"
          name="fName"
          onChange={handleChange}
          placeholder="Your Name"
        />
      </div>
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
      <div className="mt-4 mb-4 flex gap-2 items-center">
        <Image
          width={100}
          height={100}
          src={imagePreview ? imagePreview : profileImg}
          className="w-[100px] h-[100px] object-cover"
          alt="profile"
        />
        <button
          className="py-2 px-[4px] bg-primary  text-white"
          type="button"
          onClick={handleUploadImg}
        >
          Upload
        </button>
      </div>
      <div className="form-control">
        <input
          type="file"
          onChange={handleFileChange}
          name="file"
          className="!hidden"
          ref={fileRef}
        />
      </div>
      <div>
        <p>
          Already have an account ?{" "}
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
      <div className="form-control">
        <LoadingButton loading={loading}>Sign Up</LoadingButton>
      </div>
    </form>
  );
}
