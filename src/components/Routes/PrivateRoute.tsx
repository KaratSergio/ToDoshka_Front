import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '@src/redux/store';
import { selectIsLogin, selectToken } from '@src/redux/auth/selectors';

const PrivateRoute: React.FC = () => {
  const isLogin = useAppSelector(selectIsLogin);
  const token = useAppSelector(selectToken);

  // if (!isLogin && token) {
  //   return <div>...Loading</div>;
  // }
  // if (!isLogin && !token) {
  //   return <Navigate to="/" />;
  // }
  return <Outlet />;
};
export default PrivateRoute;
