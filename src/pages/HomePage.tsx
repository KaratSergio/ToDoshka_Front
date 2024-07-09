import { useEffect } from 'react';
import { useAppDispatch } from '@redux/store';
import { getBoardsThunk } from '@redux/boards/thunks';

import Header from '@components/Header/Header';
import Sidebar from '@components/Sidebar/Sidebar';
import ScreensPage from '@components/Screens/ScreensPage';

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBoardsThunk());
  }, []);

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
