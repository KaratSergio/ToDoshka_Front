import { useAppSelector, useAppDispatch } from '@redux/store';
import { useEffect } from 'react';
import { selectAllBoards, selectBoardById } from '@redux/boards/selectors';

import DefaultBoard from '@components/Screens/Content/DefaultBoard';
import NewBoard from '@components/Screens/Content/NewBoard';
import { getBoardById } from '@redux/boards/thunks';
import { getBackgroundUrl } from '@utils/backgroundUtils';

const ScreensPage = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector(selectAllBoards);
  const board = useAppSelector(selectBoardById);

  console.log('====================================');
  console.log(board);
  console.log('====================================');

  useEffect(() => {
    if (board._id) {
      dispatch(getBoardById(board._id));
    }
  }, [dispatch, board._id]);

  const backgroundUrl = getBackgroundUrl(board.background);

  return (
    <div
      style={{ backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : 'none' }}
      className=" bg-yellow-100"
    >
      <h2>{board.title}</h2>
      <div className="w-full">{boards.length > 0 ? <NewBoard /> : <DefaultBoard />}</div>
    </div>
  );
};

export default ScreensPage;
