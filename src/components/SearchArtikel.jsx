import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchArtikel = () => {
    return (
      <div className='w-full flex flex-col sm:flex-row items-center text-white border rounded-md'>
        <HiMagnifyingGlass className="ml-3" size={20} />
        <input
          type='text'
          className='sm:flex-1 items-center bg-transparent px-4 py-2 ml-1 rounded-md focus:outline-none'
          placeholder='Cari Komunitas...'
        />
        <button
          type='button'
          className='bg-transparan  hover:bg-white hover:text-black text-white px-4 py-2 rounded-md focus:outline-none'
        >
          Cari Artikel
        </button>
      </div>
    );
  };
  
  export default SearchArtikel;
  