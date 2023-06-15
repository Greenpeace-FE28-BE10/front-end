import { Navigate, useLocation } from 'react-router-dom';

const ProtectedVisitor = ({ children }) => {
  const location = useLocation();
  const roleAccess = JSON.parse(localStorage.getItem('user'));
  console.log(roleAccess);

  if (roleAccess?.role !== 'user' && roleAccess?.role !== 'admin') {
    return <Navigate to='/signin' state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedVisitor;
