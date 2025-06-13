import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex items-center gap-3 px-2 max-w-3xl mx-auto">
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="py-2 flex-1 mr-1 border-solid px-4 rounded-full border-1 border-neutral-400 focus:outline-1 focus:border-0 focus:outline-amber-500"
      />
      <button className="bg-amber-500 py-3 px-4 rounded-lg cursor-pointer hover:bg-amber-600 transition-colors">
        <FaSearch className="text-xl text-white" />
      </button>
    </div>
  );
}

export default SearchBar;
