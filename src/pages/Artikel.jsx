import { Link } from 'react-router-dom';
import CardArticleSecondary from '../components/CardArticleSecondary';
import HeroArtikel from '../components/HeroArtikel';

const Artikel = () => {
  return (
    <div className='pt-24 sm:pt-0 flex flex-col items-center justify-center px-5 sm:px-[120px]'>
      <section className='w-full sm:pb-20 sm:pt-[100px]'>
        <HeroArtikel />
      </section>
      <section className='flex gap-4 sm:gap-8 flex-col sm:flex-row pt-8'>
        <div className='sm:w-1/2 h-full'>
          <img
            src='https://res.cloudinary.com/dbmiqiqf4/image/upload/v1682821505/samples/hijauin/li-an-lim-ycW4YxhrWHM-unsplash_duoof4.jpg'
            className='w-full h-full object-cover rounded-md'
            alt=''
          />
        </div>
        <div className='sm:w-1/2 flex flex-col justify-between items-end gap-2 sm:gap-0'>
          <div className='space-y-4'>
            <h1 className='font-semibold text-[28px] sm:text-[48px] leading-tight'>
              Peran masyarakat dalam upaya mengurangi dampak krisis iklim
            </h1>
            <p className='text-[#8C8C8C] font-light text-justify'>
            Jutaan orang di seluruh dunia berpartisipasi dalam Hari Bumi pada 22 April lalu, untuk mendukung perlindungan atas lingkungan.Yang paling diingat banyak orang adalah perubahan iklim dan kebutuhan untuk mengurangi emisi gas rumah kaca global dengan cepat.
            Sebagian besar perubahan diperlukan untuk mengendalikan perubahan iklim dengan cepat, melampaui apa yang dapat dilakukan oleh setiap individu – mulai dari meningkatkan infrastruktur energi terbarukan, hingga menghentikan penggunaan bahan bakar fosil secara cepat.
            </p>
          </div>
          <Link
            to='/detailart'
            className='bg-[#52C41A] text-white rounded-md text-center py-2.5 px-3.5 sm:w-1/2'
          >
            Baca Selengkapnya
          </Link>
        </div>
      </section>
      <section className='w-full py-8 sm:py-20'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16'>
          <CardArticleSecondary />
          <CardArticleSecondary />
          <CardArticleSecondary />
          <CardArticleSecondary />
          <CardArticleSecondary />
          <CardArticleSecondary />
          <CardArticleSecondary />
          <CardArticleSecondary />
          <CardArticleSecondary />
        </div>
      </section>
    </div>
  );
};

export default Artikel;
