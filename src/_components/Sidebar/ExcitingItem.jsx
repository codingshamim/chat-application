"use client";
import profile from "@/assets/image/profile.png";
import Image from "next/image";
import useAuth from "../../../hooks/useAuth";
import Link from "next/link";
export default function ExcitingItem({ user: updateUser }) {
  const { user } = useAuth();
  return (
    <>
      {user?.id !== updateUser?._id && (
        <li>
          <Link
            className="flex w-full p-1 gap-2 mt-2 hover:bg-secondary cursor-pointer rounded-sm"
            href={`?loggedUser=${user?.id}&chatUser=${updateUser?._id}`}
          >
            <Image
              className="object-cover w-[50px] h-[50px] rounded-[50%]"
              width={50}
              height={50}
              alt="profile"
              src={
                updateUser && updateUser?.avatar
                  ? `http://localhost:3000/profile/${updateUser?.avatar}`
                  : profile
              }
            />
            <div>
              <h2>
                {updateUser && updateUser?.fName
                  ? updateUser?.fName
                  : "No Name"}
              </h2>
              <p className="text-sm text-[gray]">
                Hello vai..
                <span>
                  <small className="indecator bg-primary ml-2" />
                  3m
                </span>
              </p>
            </div>
          </Link>
        </li>
      )}
    </>
  );
}
