import ChatBox from "@/_components/ChatBox";

import Sidebar from "@/_components/Sidebar/Sidebar";
import UserDetails from "@/_components/UserDetails/UserDetails";

export default function Home({ children, searchParams }) {
  return (
    <div className="custom-container grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4">
      <Sidebar />
      <ChatBox chatDetails={searchParams} />
      <UserDetails />
    </div>
  );
}
