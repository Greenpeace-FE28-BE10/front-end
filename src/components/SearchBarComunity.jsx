import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center text-white">
      <input
        type="text"
        className="w-333 border border-gray-300 bg-transparent px-4 py-2 rounded-l-md focus:outline-none"
        placeholder="Cari Komunitas..."
      />
      <button
        type="button"
        className="bg-transparan border hover:bg-white hover:text-black text-white px-4 py-2 rounded-r-md focus:outline-none"
      >
        Cari Komunitas
      </button>
    </div>
  );
};

export default SearchBar;
