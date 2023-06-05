import React from 'react';
import SearchBar from '../components/SearchBarComunity';
import CardCom from '../components/CardComunity';


const Komunitas = () => {
  return (
    <div>
      <section className='w-full mx-auto'>
        <div className="wrapper pt-28 pb-10 ">
          <div className="flex items-center justify-center h-[434px]  w-full bg-no-repeat bg-[url(https://res.cloudinary.com/dbmiqiqf4/image/upload/v1685715624/unsplash_OYFHT4X5isg_gppref.png)]">
            <div className="text-center">
              <h3 className='text-3xl  text-white'>It's time for us</h3>
              <h1 className='text-7xl mt-4 text-white'>To <span className='text-green-500 italic'>Save Earth</span></h1>
              <div className='flex mt-5 justify-center'>
                <SearchBar></SearchBar>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full mx-auto'>
        <div className="flex flex-col w-full h-1699 bg-[#223A26]">
          <h1 className='flex text-white text-3xl ml-10 mt-16'>Komunitas Kami</h1>
          <div className="grid grid-cols-3 gap-0">
           <CardCom></CardCom>
           <CardCom></CardCom>
           <CardCom></CardCom>
           <CardCom></CardCom>
           <CardCom></CardCom>
           <CardCom></CardCom>
           <CardCom></CardCom>
           <CardCom></CardCom>
           <CardCom></CardCom>
          </div>
          
        </div>
      </section>
    </div>
    
    
  );
};

export default Komunitas;
