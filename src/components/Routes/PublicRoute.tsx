import { selectIsLogin, selectToken } from '@src/redux/auth/selectors';
import { useAppSelector } from '@src/redux/store';
import { Outlet, Navigate } from 'react-router-dom';

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
