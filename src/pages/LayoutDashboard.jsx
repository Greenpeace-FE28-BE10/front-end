import { Outlet } from 'react-router';
import Sidebar from '../components/SideBar';

const LayoutDashboard = () => {
  return (
    <>
      <main className='flex w-full h-screen'>
        <Sidebar />
        <section className='flex-1 h-screen overflow-y-scroll'>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default LayoutDashboard;
