import ArticleSection from '../components/ArticleSection';
import HeroSection from '../components/HeroSection';
import KomunitasBaru from '../components/KomunitasBaru';
import KomunitasSection from '../components/KomunitasSection';

const Homepage = () => {
  return (
    <>
      <div className='w-full px-5 sm:px-[120px] pt-24 sm:py-32'>
        <HeroSection />
        <ArticleSection />
      </div>
      <div className='w-full px-5 bg-[#223A26]'>
        <KomunitasSection />
      </div>
      <div className='w-full px-5'>
        <KomunitasBaru />
      </div>
    </>
  );
};

export default Homepage;
