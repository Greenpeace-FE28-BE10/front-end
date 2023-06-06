import ButtonLink from './ButtonLink';

const KomunitasBaru = () => {
  return (
    <section className='w-full mt-12 sm:mt-0 py-6 sm:py-32 px-5 sm:px-[120px]'>
      <div className='w-full flex flex-col sm:flex-row sm:items-center sm:gap-24 gap-4'>
        <div className='w-full h-[240px] sm:h-[480px]'>
          <img
            className='w-full h-full object-cover rounded-md'
            src='https://res.cloudinary.com/dso5ztlee/image/upload/v1685938422/banner-new-komunitas_ueuzmi.jpg'
            alt=''
          />
        </div>
        <div className='w-full flex flex-col gap-1.5'>
          <h1 className='font-semibold text-[26px] sm:text-[44px] leading-tight'>
            Lawan perubahan iklim, dan berkontribusi untuk bantu kami lestarikan
            bumi
          </h1>
          <p className='font-light text-[#8C8C8C] sm:text-[20px]'>
            Lorem ipsum dolor sit amet consectetur, senectus nulla quam. Morbi
            ultricies dapibus auctor a.
          </p>
          <ButtonLink
            path='/buat-komunitas'
            text='Daftarkan Komunitas Baru'
            width={'w-full sm:w-1/2 mt-5 sm:mt-12'}
          />
        </div>
      </div>
    </section>
  );
};

export default KomunitasBaru;
