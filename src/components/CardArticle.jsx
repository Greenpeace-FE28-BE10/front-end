import { Link } from 'react-router-dom';

const CardArticle = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-2 sm:gap-8'>
      <div className='w-full h-full'>
        <img
          className='w-full h-[180px] sm:h-[280px] object-cover rounded-md'
          src='https://res.cloudinary.com/dso5ztlee/image/upload/v1680015476/article-2_bk4qnz.jpg'
          alt='article-img'
        />
      </div>
      <div className='flex flex-col sm:items-end sm:justify-between gap-4'>
        <div className='flex flex-col'>
          <p className='text-[18px] font-semibold text-[#52C41A]'>Terkini</p>
          <h1 className='text-[22px] sm:text-[32px] font-semibold'>
            Ancaman kekeringan yang disebabkan perubahan iklim
          </h1>
        </div>
        <Link
          to='/artikel'
          className='bg-[#52C41A] text-white rounded-full text-center py-2.5 px-3.5 sm:w-1/2'
        >
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default CardArticle;
