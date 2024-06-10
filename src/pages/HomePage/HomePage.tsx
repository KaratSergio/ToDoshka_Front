import Icon from '../../helpers/icon/Icon';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/Sidebar';

const HomePage = () => {
  return (
    <div className="xl:flex flex-row w-1440 my-0 mx-auto">
      <div className="hidden  xl:flex">
        <SideBar />
      </div>
      <div className="w-full">
        <Header />

        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
