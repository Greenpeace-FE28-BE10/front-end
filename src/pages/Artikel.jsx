
import ArtikelCard from "../components/ArtikelCard";
import HeroArtikel from "../components/HeroArtikel";

const Artikel = () => {
  return (
    <div className='pt-24 sm:pt-0 flex flex-col items-center justify-center'>
      <section className='w-full px- sm:px-[120px] sm:pb-20 sm:pt-[100px]'>
        <HeroArtikel />
      </section>
      <section className='flex flex-col items-center mb-20 rounded-lg w-full sm:px-[120px]'>
        <div className="w-full  flex items-start justify-center rounded-lg  dark:bg-gray-800 dark:border-gray-700 flex">
          <a href="#" class="flex-shrink-0">
              <img class="rounded-l-lg w-[533px] h-[380px]" src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1682821505/samples/hijauin/li-an-lim-ycW4YxhrWHM-unsplash_duoof4.jpg" alt="" />
          </a>
          <div className="pl-10 flex flex-col justify-beetwen">
            <div className="flex flex-col justify-start ">
              <a href="#">
                <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Peran masyarakat dalam upaya mengurangi dampak krisis iklim</h5>
              </a>
              <p class="mt-10 mb-3 font-normal text-1xl text-gray-500 dark:text-gray-400">Peran masyarakat dalam upaya mengurangi dampak krisis iklim. Peran masyarakat dalam upaya mengurangi dampak krisis iklim. Peran masyarakat dalam upaya ....</p>
            </div>
            <div className="flex justify-end  mt-[75px]">
              <a href="#" class="inline-flex justify-end items-center w-[204px] px-3 py-2 text-m font-medium text-center text-white bg-[#30C04F] rounded-lg hover:bg-[#223A26] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Baca Selengkapnya
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full sm:px-[120px] flex mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16">
          <ArtikelCard></ArtikelCard>
          <ArtikelCard></ArtikelCard>
          <ArtikelCard></ArtikelCard>
          <ArtikelCard></ArtikelCard>
          <ArtikelCard></ArtikelCard>
          <ArtikelCard></ArtikelCard>
          <ArtikelCard></ArtikelCard>
          <ArtikelCard></ArtikelCard>
          <ArtikelCard></ArtikelCard>
          <ArtikelCard></ArtikelCard>
          <ArtikelCard></ArtikelCard>
          <ArtikelCard></ArtikelCard>
        </div>
      </section>
    </div>
  );
};

export default Artikel;
