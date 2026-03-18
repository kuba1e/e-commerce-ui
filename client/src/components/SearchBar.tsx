import { Search } from "lucide-react";

type SearchBarProps = {
  id?: string;
  placeholder?: string;
};

export const SearchBar = ({
  id = "search",
  placeholder = "Search...",
}: SearchBarProps) => {
  return (
    <div className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md">
      <Search className="w-4 h-4 text-gray-500" />
      <input id={id} placeholder={placeholder} className="text-sm outline-0" />
    </div>
  );
};
