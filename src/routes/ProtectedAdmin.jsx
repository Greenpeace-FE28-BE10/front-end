import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedAdmin = ({ children }) => {
  const location = useLocation();
  const roleAccess = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (roleAccess.role !== 'admin') {
      return <Navigate to='/' state={{ from: location }} replace />;
    }
  }, []);

  return children;
};

export default ProtectedAdmin;
