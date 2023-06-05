const SearchBar = () => {
  return (
    <div className='w-full flex flex-col gap-4 sm:gap-2 sm:flex-row items-center text-white'>
      <input
        type='text'
        className='sm:flex-1 border border-gray-300 bg-transparent px-4 py-2 rounded-md focus:outline-none'
        placeholder='Cari Komunitas...'
      />
      <button
        type='button'
        className='bg-transparan border hover:bg-white hover:text-black text-white px-4 py-2 rounded-md focus:outline-none'
      >
        Cari Komunitas
      </button>
    </div>
  );
};

export default SearchBar;
