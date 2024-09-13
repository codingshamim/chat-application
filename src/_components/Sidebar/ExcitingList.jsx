import AllUser from "../../../queries/AllUser";
import ExcitingItem from "./ExcitingItem";

export default async function ExcitingList() {
  const users = await AllUser();

  return (
    <div className="userlist mt-2 overflow-y-auto h-[78vh] custom-scrollbar">
      <ul>
        {users.map((user) => (
          <ExcitingItem key={user?._id} user={user} />
        ))}
      </ul>
    </div>
  );
}
