import axios from 'axios';
import { useEffect, useState } from 'react';
import CardArticle from './CardArticle';

const ArticleSection = () => {
  const [dataArtikel, setDataArtikel] = useState([]);
  useEffect(() => {
    fetchArtikel();
  }, []);

  const fetchArtikel = async () => {
    const url = 'https://645348fbc18adbbdfe9933f9.mockapi.io/artikel';
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'content-Type': 'application/json' },
    });
    const artikels = await response.json();
    setDataArtikel(artikels);
  };

  return (
    <section className='w-full pt-12'>
      <h1 className='text-3xl sm:text-[40px] font-semibold my-8 sm:mt-24'>
        Artikel Terkini
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-16 gap-8'>
        {dataArtikel?.slice(0, 4).map((artikel) => (
          <CardArticle
            key={artikel.id}
            title={artikel.judul}
            image={artikel.img}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
