import React from 'react';
import SearchBar from './SearchBarComunity';

const Hero = () => {
    return(
    <div className="hero wrapper pt-28 pb-10">
      <div className="flex items-center justify-center h-[434px] w-[1240px] mx-auto bg-[url(https://res.cloudinary.com/dbmiqiqf4/image/upload/v1685715624/unsplash_OYFHT4X5isg_gppref.png)]">
        <div className="text-center">
          <h3 className='text-3xl  text-white'>It’s time for us</h3>
          <h1 className='text-7xl mt-4 text-white'>To <span className='text-green-500 italic'>Save Earth</span></h1>
          <div className='flex mt-5 justify-center'>
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
    </div>
    )

}

export default Hero