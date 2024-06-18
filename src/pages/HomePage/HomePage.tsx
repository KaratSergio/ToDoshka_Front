import { Outlet } from 'react-router-dom';
import { useTheme } from '@hooks/useTheme';
import Header from '@components/Header/Header';
import Sidebar from '@components/Sidebar/Sidebar';

const HomePage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-w-80 xl:flex flex-row min-w-1440 my-0 mx-auto">
      <div className="hidden  xl:flex">
        <Sidebar />
      </div>
      <div className="min-w-80  xl:w-1180">
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
