import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex border max-w-[10rem] text-sm">
      <input
        className="w-full text-gray-700 px-2 focus:outline-none"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="text-white bg-black p-2" type="button">
        <FiSearch size={16} />
      </button>
    </div>
  );
};

export default SearchBar;
