import { Outlet } from 'react-router-dom';

import Icon from '@src/helpers/icon/Icon';
import Header from '@components/Header/Header';
import SideBar from '@components/Sidebar/Sidebar';

const HomePage = () => {
  return (
    <div className="xl:flex flex-row w-1440 my-0 mx-auto">
      <div className="hidden  xl:flex">
        <SideBar />
      </div>
      <Icon id="icon-plus" />
      <div className="w-full">
        <Header />
        <Outlet />I I
      </div>
    </div>
  );
};

export default HomePage;
