import { Link } from 'react-router-dom';

const CardArticleSecondary = () => {
  return (
    <div className='flex flex-col gap-2 sm:gap-4 rounded-md shadow-md'>
      <div className='w-full h-full'>
        <img
          className='w-full h-[180px] sm:h-[280px] object-cover rounded-t-md'
          src='https://res.cloudinary.com/dso5ztlee/image/upload/v1680015476/article-2_bk4qnz.jpg'
          alt='article-img'
        />
      </div>
      <div className='flex flex-col gap-4 px-4 pb-3'>
        <h1 className='text-[22px] sm:text-[24px] font-semibold'>
          Ancaman kekeringan yang disebabkan perubahan iklim
        </h1>
        <div className='flex items-center justify-between'>
          <p>11/02/2023</p>
          <Link
            to='/artikel'
            className='bg-[#52C41A] text-white rounded-md text-center py-2.5 px-3.5 sm:w-1/2'
          >
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardArticleSecondary;
