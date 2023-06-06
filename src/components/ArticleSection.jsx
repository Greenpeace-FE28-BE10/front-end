import CardArticle from './CardArticle';

const ArticleSection = () => {
  return (
    <section className='w-full pt-12 sm:'>
      <h1 className='text-3xl sm:text-[40px] font-semibold my-8 sm:mt-24'>
        Artikel Terkini
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-16 gap-8'>
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
      </div>
    </section>
  );
};

export default ArticleSection;
