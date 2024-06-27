import Header from '@components/Header/Header';
import Sidebar from '@components/Sidebar/Sidebar';
import ScreensPage from '@components/Screens/ScreensPage';

const HomePage = () => {
  return (
    <div className="flex">
      <div className="">
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
