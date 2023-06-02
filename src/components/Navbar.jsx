import { Link } from 'react-router-dom';

const Navbar = () => {
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
    <header className='w-full fixed shadow-md'>
      <nav className='w-full py-4 px-[120px] flex justify-between items-center'>
        <Link to='/' className='text-[28px] font-semibold text-[#52C41A]'>
          Hijauin.
        </Link>
        <ul className='flex gap-10'>
          {menuItem.map((item, index) => (
            <li className='hover:text-[#52C41A]' key={index}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
          <li className='pl-8'>
            <Link
              className='bg-[#52C41A] px-8 py-2 rounded text-white'
              to='/signin'
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
