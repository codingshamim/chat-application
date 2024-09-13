import Image from "next/image";
import GetUserById from "../../queries/GetUserById";
import profile from "@/assets/image/profile.png";
import MessageBox from "./MessageBox";
import GetMessageQuery from "../../queries/GetMessageQuery";
export default async function ChatBox({ chatDetails }) {
  const user = await GetUserById(chatDetails?.chatUser);
  const msgs = await GetMessageQuery(
    chatDetails?.loggedUser,
    chatDetails?.chatUser
  );
  return (
    <div className="bg-white shadow-md h-[97vh] col-span-1 md:col-span-4 lg:col-span-2 relative">
      {user ? (
        <>
          <div className="chat-header p-2 flex justify-between border-b bg-white">
            <div className="flex gap-2">
              <Image
                className="w-[50px] h-[50px] rounded-[50%]"
                src={
                  user && user?.avatar
                    ? `http://localhost:3000/profile/${user?.avatar}`
                    : profile
                }
                width={50}
                height={50}
                alt="profile"
              />
              <div>
                <h2>{user?.fName}</h2>
                <p className="text-[gray]">Active Now</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="cursor-pointer">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  fill="#000000"
                  width="30px"
                  height="30px"
                  viewBox="-4 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>video</title>
                  <path d="M15.5 13.219l6.844-3.938c0.906-0.531 1.656-0.156 1.656 0.938v11.625c0 1.063-0.75 1.5-1.656 0.969l-6.844-3.969v2.938c0 1.094-0.875 1.969-1.969 1.969h-11.625c-1.063 0-1.906-0.875-1.906-1.969v-11.594c0-1.094 0.844-1.938 1.906-1.938h11.625c1.094 0 1.969 0.844 1.969 1.938v3.031z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="custom-scrollbar pb-[2px] h-[75vh] lg:h-[76vh] overflow-y-auto">
            <ul className="px-2">
              {msgs.map((msg) => (
                <li
                  key={msg?._id}
                  className={`flex gap-2  mt-2  ${
                    msg?.sender !== chatDetails?.loggedUser
                      ? "incoming"
                      : "outgoing justify-end"
                  }`}
                >
                  {msg?.sender !== chatDetails?.loggedUser && (
                    <Image
                      src={`http://localhost:3000/profile/${user?.avatar}`}
                      className="w-[50px] object-cover rounded-[50%] h-[50px]"
                      alt="profile"
                      width={50}
                      height={50}
                    />
                  )}
                  <p
                    className={`${
                      msg?.sender !== chatDetails?.loggedUser
                        ? "bg-secondary"
                        : "bg-primary text-white "
                    } p-2  md:min-w-1/2`}
                  >
                    {msg?.content}
                  </p>
                </li>
              ))}
              {/* <li className="flex outgoing justify-end gap-2 mt-2 outgoing">
                <p className="bg-primary text-white p-2 w-[80%] md:w-1/2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Exercitationem, recusandae. Obcaecati explicabo odit,
                  repellendus quidem facilis iste molestiae dolorum officia
                  ullam similique enim quaerat architecto ipsum inventore
                  provident nesciunt pariatur!
                </p>
              </li> */}
            </ul>
          </div>
          <div>
            <MessageBox chatDetails={chatDetails} />
          </div>
        </>
      ) : (
        <h1 className="text-2xl font-medium text-center mt-[200px]">
          Please Select User to Chat
        </h1>
      )}
    </div>
  );
}
