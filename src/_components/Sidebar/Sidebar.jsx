import SearchBar from "../chatWrapper/SearchBar";
import ExcitingList from "./ExcitingList";

export default function Sidebar() {
  return (
    <aside className="bg-white hidden md:block shadow-md col-span-1 md:col-span-2 lg:col-span-1 p-2">
      <h1 className="text-2xl  font-medium">Chats</h1>
      <SearchBar />
      <ExcitingList />
    </aside>
  );
}
