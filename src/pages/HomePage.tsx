import { useState, useEffect } from 'react';
import { useAppDispatch } from '@redux/store';
import { getBoardsThunk } from '@redux/boards/thunks';

import Sidebar from '@components/Sidebar/Sidebar';
import ScreensPage from '@components/Screens/ScreensPage';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const [selectedBoard, setSelectedBoard] = useState(null);

  useEffect(() => {
    dispatch(getBoardsThunk());
  }, [dispatch]);

  const handleBoardSelect = (board: any) => {
    setSelectedBoard(board);
  };

  return (
    <div className="flex">
      <div>
        <Sidebar onBoardSelect={handleBoardSelect} />
      </div>
      <div className="w-full">
        <ScreensPage />
      </div>
    </div>
  );
};

export default HomePage;
