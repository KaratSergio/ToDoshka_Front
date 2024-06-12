import { Outlet } from 'react-router-dom';

// import Icon from '@helpers/icon/Icon';
import Header from '@components/Header/Header';
import SideBar from '@components/Sidebar/Sidebar';

const HomePage = () => {
  return (
    <div className="xl:flex flex-row w-1440 my-0 mx-auto">
      <div className="hidden  xl:flex">
        <SideBar />
      </div>
      <div className="w-full">
        <Header />
        <div>
          <p>
            Before starting your project, it is essential to create a board to visualize and track
            all the necessary tasks and milestones. This board serves as a powerful tool to organize
            the workflow and ensure effective collaboration among team members.
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
