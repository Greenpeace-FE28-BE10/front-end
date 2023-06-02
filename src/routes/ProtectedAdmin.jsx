import { Navigate, useLocation } from 'react-router-dom';

const ProtectedAdmin = ({ userRole, children }) => {
  const location = useLocation();

  if (userRole !== 'admin') {
    return <Navigate to='/signin' state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedAdmin;
