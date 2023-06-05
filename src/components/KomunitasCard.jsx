import ButtonLink from './ButtonLink';

const KomunitasCard = () => {
  return (
    <div className='w-full flex flex-col gap-2 bg-white rounded-md'>
      <div className='w-full h-full'>
        <img
          className='w-full h-full object-cover rounded-t-md'
          src='https://res.cloudinary.com/dso5ztlee/image/upload/v1680015475/hero-img_upmbsm.jpg'
          alt=''
        />
      </div>
      <div className='flex flex-col gap-4 sm:gap-10 px-3 py-3.5 sm:py-6 sm:px-8'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-[20px] font-semibold'>Hijauin Medan</h2>
          <p className=' text-[#8C8C8C] font-light'>Leader: Ini Leader</p>
          <div className='flex gap-2'>
            <img
              src='https://res.cloudinary.com/dso5ztlee/image/upload/v1685937896/map_vu0r4b.png'
              alt='loc'
            />
            <p className='font-light text-[#8C8C8C]'>Medan dan sekitarnya</p>
          </div>
        </div>
        <ButtonLink
          path='/daftar-komunitas'
          text='Gabung Komunitas'
          width={'w-full sm:w-1/2 sm:mx-auto'}
        />
      </div>
    </div>
  );
};

export default KomunitasCard;
