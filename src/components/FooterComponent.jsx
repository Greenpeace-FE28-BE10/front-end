import { Link } from 'react-router-dom';

const FooterComponent = () => {
  const menuItem = [
    {
      text: 'Home',
      path: '/',
    },
    {
      text: 'Artikel',
      path: '/artikel',
    },
    {
      text: 'Komunitas',
      path: '/komunitas',
    },
  ];

  return (
    <footer className='w-full bg-[#223A26] py-10 flex flex-col items-center justify-center gap-8'>
      <div className='w-full px-5 sm:px-[120px] flex flex-col sm:flex-row justify-between items-start gap-4'>
        <div className='w-full sm:max-w-[30%] space-y-1 sm:space-y-4'>
          <Link to='/' className='text-[28px] font-semibold text-[#52C41A]'>
            Hijauin.
          </Link>
          <p className='text-white font-light'>
            Bersama kita bisa membuat perubahan. Bergabung dengan kami untuk
            mendapatkan info terbaru seputar krisis iklim.
          </p>
        </div>
        <div className='flex justify-between gap-20'>
          <div className='space-y-3 sm:space-y-4'>
            <p className='font-semibold text-white text-[20px]'>Menu</p>
            <ul className='flex flex-col gap-1 sm:gap-2'>
              {menuItem.map((item, index) => (
                <li key={index}>
                  <Link
                    className='text-white font-light hover:text-[#52C41A]'
                    to={item.path}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-3 sm:space-y-4'>
            <p className='font-semibold text-white text-[20px]'>Hubungi Kami</p>
            <ul className='text-white font-light flex flex-col gap-1 sm:gap-2'>
              <li>support@hijauin.id</li>
              <li>021-0981-2171</li>
              <li>Hijauin, Indonesia, 57322</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className='font-light text-white text-center'>
          Copyright 2023 • All rights reserved • Hijauin • FE28/BE10
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
