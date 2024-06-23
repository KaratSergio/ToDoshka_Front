import { Outlet } from 'react-router-dom';
import { useTheme } from '@hooks/useTheme';

import Header from '@components/Header/Header';
import Sidebar from '@components/Sidebar/Sidebar';
import DefaultBoard from '@components/Screens/DefaultBoard';

const HomePage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-w-80 xl:flex flex-row min-w-1440 my-0 mx-auto">
      <div className="hidden  xl:flex">
        <Sidebar />
      </div>
      <div className="min-w-80  xl:w-1180">
        <Header />
        <DefaultBoard />
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
