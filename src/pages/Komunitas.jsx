import HeroKomunitas from '../components/HeroKomunitas';
import KomunitasCard from '../components/KomunitasCard';

const Komunitas = () => {
  return (
    <div className='pt-24 sm:pt-0'>
      <section className='w-full px-5 sm:px-[120px] sm:pb-20 sm:pt-44'>
        <HeroKomunitas />
      </section>
      <section className='w-full'>
        <div className='flex flex-col w-full bg-[#223A26] px-5 sm:px-[120px] py-16 sm:py-24 mt-12 gap-10'>
          <h1 className='flex text-white text-[28px] sm:text-3xl'>
            Komunitas Kami
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16'>
            <KomunitasCard />
            <KomunitasCard />
            <KomunitasCard />
            <KomunitasCard />
            <KomunitasCard />
            <KomunitasCard />
            <KomunitasCard />
            <KomunitasCard />
            <KomunitasCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Komunitas;
