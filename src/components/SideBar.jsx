import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { HiMenuAlt3, HiOutlineHome, HiOutlineUserCircle } from 'react-icons/hi';
import { HiOutlineNewspaper, HiOutlineUserGroup } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const SideMenus = [
    {
      name: 'Artikel',
      path: '/dashboard/artikel',
      icon: <HiOutlineNewspaper />,
    },
    {
      name: 'Komunitas',
      path: '/dashboard',
      icon: <HiOutlineUserGroup />,
    },
    {
      name: 'Back to home',
      path: '/',
      icon: <HiOutlineHome />,
    },
  ];

  const [open, setOpen] = useState(true);

  const [isAuth, setIsAuth] = useState(false);
  const adminLogin = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (adminLogin) {
      setIsAuth(true);
    }
  }, [adminLogin]);

  return (
    <aside className='flex'>
      <div className='flex gap-6'>
        <div
          className={`bg-[#223A26] min-h-screen ${
            open ? 'w-72' : 'w-24'
          } duration-500 text-gray-100 px-4`}
        >
          <div className='py-3 flex justify-end'>
            <HiMenuAlt3
              size={46}
              className='cursor-pointer'
              onClick={() => setOpen(!open)}
            />
          </div>
          <div>
            <h1
              className={`text-center text-[45px]
                font-semibold text-[#52C41A]
                ${!open && 'hidden'}`}
            >
              Hijauin.
            </h1>
          </div>
          <div className='mt-4 flex flex-col gap-4 relative items-center'>
            <div className='flex items-center justify-center'>
              <IconContext.Provider value={{ size: '4em' }}>
                <div>
                  <HiOutlineUserCircle />
                </div>
              </IconContext.Provider>
            </div>
            {isAuth ? (
              <h2
                className={`text-center text-[24px] mt-2 ${!open && 'hidden'}`}
              >
                {`Hello ${adminLogin.name}`}
              </h2>
            ) : (
              <h2
                className={`text-center text-[28px] mt-2 ${!open && 'hidden'}`}
              >
                Hello Admin
              </h2>
            )}
          </div>
          <div className='mt-10 flex flex-col gap-4 relative'>
            {SideMenus.map((menu, i) => (
              <Link
                to={menu.path}
                key={i}
                className={`group flex items-center text-[20px] gap-3.5 font-medium p-2 hover:bg-[#0A1C0E] rounded-md`}
              >
                <IconContext.Provider value={{ size: '2em' }}>
                  <div>{menu.icon}</div>
                </IconContext.Provider>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`duration-500 ${
                    !open && 'opacity-0 translate-x-28 overflow-hidden'
                  }`}
                >
                  {menu.name}
                </h2>
                <h2
                  className={`${
                    open && 'hidden'
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
