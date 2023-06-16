import { Link } from 'react-router-dom';

const CardArticle = ({ title, image }) => {
  return (
    <div className='flex flex-col sm:flex-row gap-2 sm:gap-0'>
      <div className='w-3/5 h-full'>
        <img
          className='w-[280px] h-[180px] sm:h-[280px] object-cover rounded-md'
          src={`${image}`}
          alt='article-img'
        />
      </div>
      <div className='w-4/5 flex flex-col sm:items-end sm:justify-between gap-4'>
        <div className='flex flex-col'>
          <p className='text-[18px] font-semibold text-[#52C41A]'>Terkini</p>
          <h1 className='text-[22px] sm:text-[28px] font-semibold'>{title}</h1>
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
