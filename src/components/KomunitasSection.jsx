import KomunitasCard from './KomunitasCard';

const KomunitasSection = () => {
  return (
    <section className='w-full mt-12 py-8 sm:py-20 px-5 sm:px-[120px]'>
      <h1 className='text-3xl text-white sm:text-[40px] font-semibold mb-10 sm:mb-16'>
        Komunitas Kami
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-16 gap-8'>
        <KomunitasCard />
        <KomunitasCard />
        <KomunitasCard />
      </div>
    </section>
  );
};

export default KomunitasSection;
