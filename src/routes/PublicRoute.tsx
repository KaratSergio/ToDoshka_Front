import { useAppSelector } from '@redux/store';
import { Outlet, Navigate } from 'react-router-dom';
import { selectIsLogin, selectToken } from '@redux/auth/selectors';

const PublicRoute: React.FC = () => {
  const isLogin = useAppSelector(selectIsLogin);
  const token = useAppSelector(selectToken);

  // if (!isLogin && token) {
  //   return <div>...loader to hell</div>;
  // }

  if (isLogin) {
    return <Navigate to="/home" />;
  }

  return <Outlet />; ///AuthPage
};

export default PublicRoute;
