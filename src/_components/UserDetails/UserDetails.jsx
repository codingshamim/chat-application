"use client";

import Image from "next/image";
import useAuth from "../../../hooks/useAuth";
import profileImg from "../profileImgUrl";
import Link from "next/link";

export default function UserDetails() {
  const { user } = useAuth();

  return (
    <div className="bg-white shadow-md hidden lg:block p-2 col-span-1 h-full">
      <div className="w-full flex justify-center h-full items-center">
        {user ? (
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              className="w-[100px] object-cover h-[100px] rounded-[50%]"
              src={
                user
                  ? `http://localhost:3000/profile/${user?.avatar}`
                  : profileImg
              }
              width={100}
              height={100}
              alt="profile"
            />
            <div>
              <h2>{user ? user?.fullName : "No Name"}</h2>
              <p className="text-[gray] text-center">Active Now</p>
            </div>
            <button
              onClick={() => localStorage.clear("user")}
              className="py-[6px] px-[10px] hover:bg-disablePrimary bg-primary text-white rounded-sm"
            >
              Log Out
            </button>
          </div>
        ) : (
          <p>
            Please Login first <Link className="text-primary" href="/login">Login </Link>
          </p>
        )}
      </div>
    </div>
  );
}
