import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Artikel from '../pages/Artikel';
import BuatKomunitas from '../pages/BuatKomunitas';
import DaftarKomunitas from '../pages/DaftarKomunitas';
import Homepage from '../pages/Homepage';
import Komunitas from '../pages/Komunitas';
import Layout from '../pages/Layout';
import Register from '../pages/Register';
import Signin from '../pages/Signin';
import ProtectedAdmin from './ProtectedAdmin';
import ScrollToTop from './ScrollToTop';
import ProtectedVisitor from './ProtectedVisitor';
import LayoutDashboard from '../pages/LayoutDashboard';
import ArtikelDashboard from '../pages/dashboard/ArtikelDashboard';
import KomunitasDashboard from '../pages/dashboard/KomunitasDashboard';
import DetailDashboard from '../pages/dashboard/DetailDashboard';

const SetupRoute = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/artikel' element={<Artikel />} />
          <Route path='/komunitas' element={<Komunitas />} />
          <Route path='/daftar-komunitas/:id' element={<DaftarKomunitas />} />
          <Route
            path='/buat-komunitas'
            element={
              <ProtectedVisitor>
                <BuatKomunitas />
              </ProtectedVisitor>
            }
          />
        </Route>
        <Route path='/dashboard' element={<LayoutDashboard />}>
          <Route
            index
            element={
              <ProtectedAdmin>
                <KomunitasDashboard />
              </ProtectedAdmin>
            }
          />
          <Route
            path='/dashboard/detail-komunitas/:id'
            element={<DetailDashboard />}
          />
          <Route
            path='/dashboard/artikel'
            element={
              <ProtectedAdmin>
                <ArtikelDashboard />
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
