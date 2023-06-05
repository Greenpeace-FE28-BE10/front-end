import SearchBar from './SearchBarComunity';

const HeroKomunitas = () => {
  return (
    <div className='w-full py-10 sm:py-36 bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dso5ztlee/image/upload/v1685944916/banner-komunitas_kmti0h.jpg)] rounded-xl'>
      <div className='flex items-center justify-center w-full'>
        <div className='text-center'>
          <h3 className='sm:text-3xl text-[28px] text-white'>
            It's time for us
          </h3>
          <h1 className='sm:text-7xl text-[28px] sm:mt-4 text-white'>
            To <span className='text-green-500 italic'>Save Earth</span>
          </h1>
          <div className='flex mt-5 justify-center'>
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroKomunitas;
