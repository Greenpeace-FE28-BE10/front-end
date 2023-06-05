import ButtonLink from './ButtonLink';

const HeroSection = () => {
  return (
    <section className='flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-16'>
      <div className='flex sm:w-1/2 flex-col gap-1.5'>
        <h1 className='text-[28px] md:text-[52px] leading-snug font-semibold'>
          Peran masyarakat dalam upaya mengurangi dampak krisis iklim
        </h1>
        <p className='font-light mb-5 sm:text-[20px] text-[#8C8C8C]'>
          Wadah untuk komunitas peduli lingkungan dan informasi terbaru di
          Indonesia.
        </p>
        <ButtonLink
          path='/artikel'
          text='Baca Artikel'
          width={'w-full sm:w-1/3'}
        />
        <div className='my-4 sm:my-0 sm:mt-16'>
          <ul className='flex flex-col sm:flex-row gap-3 sm:gap-12'>
            <li className='flex sm:flex-col gap-4 items-center sm:items-start'>
              <img
                className='w-[24px] h-full sm:w-[40px]'
                src='https://res.cloudinary.com/dso5ztlee/image/upload/v1680015473/article-icon_zgs5jp.png'
                alt='article-icon'
              />
              <p className='text-xl'>
                <span className='font-semibold text-[#52C41A] mr-2'>87</span>
                Artikel Terkini
              </p>
            </li>
            <li className='flex sm:flex-col gap-4 items-center sm:items-start'>
              <img
                className='w-[24px] h-full sm:w-[40px]'
                src='https://res.cloudinary.com/dso5ztlee/image/upload/v1680015473/event-icon_f587s5.png'
                alt='article-icon'
              />
              <p className='text-xl'>
                <span className='font-semibold text-[#52C41A] mr-2'>27</span>
                Komunitas Aktif
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full flex-1 h-full'>
        <img
          className='w-full h-full object-cover rounded-md shadow-md'
          src='https://res.cloudinary.com/dso5ztlee/image/upload/v1681366438/new-hero_gttogo.jpg'
          alt='hero-banner'
        />
      </div>
    </section>
  );
};

export default HeroSection;
