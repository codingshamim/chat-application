export default function SearchBar() {
  return (
    <div className="w-full mt-4 rounded-md">
      <input
        type="text"
        placeholder="Search Messenger"
        className="bg-secondary rounded-sm w-full outline-none py-[6px] px-[8px] border border-[transparent] focus:border focus:border-[#000]"
      />
    </div>
  );
}
