import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@redux/store';
import Header from '@components/Header/Header';
import Sidebar from '@components/Sidebar/Sidebar';
import ScreensPage from '@components/Screens/ScreensPage';
import { getBoardsThunk } from '@redux/boards/thunks';
import { selectToken } from '@redux/auth/selectors';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(getBoardsThunk());
    }
  }, [token, dispatch]);

  console.log('====================================');
  console.log('token', token);
  console.log('====================================');

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <ScreensPage />
      </div>
    </div>
  );
};

export default HomePage;
