import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '@redux/store';
import { selectIsLogin, selectToken } from '@redux/auth/selectors';

const PrivateRoute: React.FC = () => {
  const isLogin = useAppSelector(selectIsLogin);
  const token = useAppSelector(selectToken);

  if (!isLogin && !token) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
