import { Outlet } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <FooterComponent />
      </main>
    </>
  );
};

export default Layout;
