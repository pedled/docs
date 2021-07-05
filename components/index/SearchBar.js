import { SearchIcon } from "@heroicons/react/solid";

export default function SearchBar() {
  return (
    <div className="bg-white w-3/4 max-w-sm p-2 rounded-full flex border border-black-20">
      <SearchIcon className="text-black-20 px-2 w-16" />
      <input
        className="w-full rounded mx-2"
        type="text"
        placeholder="Search Documentation"
      />
    </div>
  );
}
