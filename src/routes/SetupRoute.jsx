import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Artikel from '../pages/Artikel';
import BuatKomunitas from '../pages/BuatKomunitas';
import DaftarKomunitas from '../pages/DaftarKomunitas';
import MainDashboard from '../pages/dashboard/MainDashboard';
import Homepage from '../pages/Homepage';
import Komunitas from '../pages/Komunitas';
import Layout from '../pages/Layout';
import Register from '../pages/Register';
import Signin from '../pages/Signin';
import ProtectedAdmin from './ProtectedAdmin';
import ScrollToTop from './ScrollToTop';
import ProtectedVisitor from './ProtectedVisitor';

const SetupRoute = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/artikel' element={<Artikel />} />
          <Route path='/komunitas' element={<Komunitas />} />
          <Route
            path='/daftar-komunitas'
            element={
              <ProtectedVisitor userRole='visitor'>
                <DaftarKomunitas />
              </ProtectedVisitor>
            }
          />
          <Route
            path='/buat-komunitas'
            element={
              <ProtectedVisitor userRole='visitor'>
                <BuatKomunitas />
              </ProtectedVisitor>
            }
          />
        </Route>
        <Route path='/dashboard' element={<Layout />}>
          <Route
            index
            element={
              <ProtectedAdmin userRole='admin'>
                <MainDashboard />
              </ProtectedAdmin>
            }
          />
        </Route>
        <Route path='/signin' element={<Signin />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRoute;
