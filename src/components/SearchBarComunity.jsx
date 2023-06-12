const SearchBar = () => {
  return (
    <div className='w-full flex flex-col  sm:flex-row items-center text-white border rounded-md'>
      <input
        type='text'
        className='sm:flex-1  bg-transparent px-4 py-2 rounded-md focus:outline-none'
        placeholder='Cari Komunitas...'
      />
      <button
        type='button'
        className='bg-transparan  hover:bg-white hover:text-black text-white px-4 py-2 rounded-md focus:outline-none'
      >
        Cari Komunitas
      </button>
    </div>
  );
};

export default SearchBar;
