import { useEffect, useMemo, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@redux/store';
import { getBoardsThunk, getBoardById } from '@redux/boards/thunks';
import { selectAllBoards, selectBoardById, selectIsBoardsLoading } from '@redux/boards/selectors';

import { getBackgroundUrl } from '@utils/backgroundUtils';

import Header from '@components/Header/Header';
import Board from '@components/Screens/Content/Board';
import DefaultBoard from '@components/Screens/Content/DefaultBoard';

const ScreensPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector(selectAllBoards);
  const board = useAppSelector(selectBoardById);
  const isLoading = useAppSelector(selectIsBoardsLoading);

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    dispatch(getBoardsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (boards.length > 0) {
      const lastBoardId = boards[boards.length - 1]._id;
      if (lastBoardId) {
        dispatch(getBoardById(lastBoardId));
      }
      setIsInitialLoad(false);
    }
  }, [boards, dispatch]);

  const backgroundUrl = useMemo(() => (board ? getBackgroundUrl(board.background) : ''), [board]);

  if (isLoading || isInitialLoad) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      }}
    >
      <Header />
      <div>
        <h2 className="pl-5 bg-slate-500">{board?.title}</h2>
        <div className="w-full">{boards.length > 0 ? <Board /> : <DefaultBoard />}</div>
      </div>
    </div>
  );
};

export default ScreensPage;
