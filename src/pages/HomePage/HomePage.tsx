import { Outlet, useParams } from 'react-router-dom';
import { useTheme } from '@hooks/useTheme';
import { useSelector } from 'react-redux';
import { selectBoardById } from '@redux/boards/selectors';

import Header from '@components/Header/Header';
import Sidebar from '@components/Sidebar/Sidebar';
import DefaultBoard from '@components/Screens/DefaultBoard';
import NewBoard from '@components/Screens/NewBoard';

const HomePage = () => {
  const { theme, setTheme } = useTheme();
  const params = useParams<{ boardId?: string }>();
  const selectedBoard = useSelector(selectBoardById(params.boardId || ''));

  console.log('====================================');
  console.log(selectedBoard);
  console.log('====================================');

  return (
    <div className="min-w-80 xl:flex flex-row min-w-1440 my-0 mx-auto">
      <div className="hidden xl:flex">
        <Sidebar />
      </div>
      <div className="min-w-80 xl:w-1180">
        <Header />
        {selectedBoard ? (
          <>
            <NewBoard />
            <Outlet />
          </>
        ) : (
          <DefaultBoard />
        )}
      </div>
    </div>
  );
};

export default HomePage;
