import Icon from '../../helpers/icon/Icon';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/Sidebar';
import { useTheme } from '../../components/Hooks/useTheme';

const HomePage = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <div className="min-w-80 xl:flex flex-row min-w-1440 my-0 mx-auto">
      <div className="hidden  xl:flex">
        <SideBar />
      </div>
      <div className="min-w-80  xl:w-1180">
        <Header />

        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
