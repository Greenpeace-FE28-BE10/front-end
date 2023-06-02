import { Navigate, useLocation } from 'react-router-dom';

const ProtectedVisitor = ({ userRole, children }) => {
  const location = useLocation();

  if (userRole !== 'visitor' || userRole !== 'admin') {
    return <Navigate to='/signin' state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedVisitor;
