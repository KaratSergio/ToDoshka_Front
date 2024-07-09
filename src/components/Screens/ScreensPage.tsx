import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@redux/store';
import { selectAllBoards, selectBoardById } from '@redux/boards/selectors';

import Header from '@components/Header/Header';
import Board from '@components/Screens/Content/Board';
import DefaultBoard from '@components/Screens/Content/DefaultBoard';

import { getBoardById } from '@redux/boards/thunks';
import { getBackgroundUrl } from '@utils/backgroundUtils';

const ScreensPage = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector(selectAllBoards);
  const board = useAppSelector(selectBoardById);

  useEffect(() => {
    if (board?._id) {
      dispatch(getBoardById(board._id));
    }
  }, [dispatch, board._id]);

  const backgroundUrl = getBackgroundUrl(board.background);

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
      <div className="bg-yellow-100">
        <h2>{board.title}</h2>
        <div className="w-full">{boards.length > 0 ? <Board /> : <DefaultBoard />}</div>
      </div>
    </div>
  );
};

export default ScreensPage;
