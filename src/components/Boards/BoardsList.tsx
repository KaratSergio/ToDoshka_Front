import { useEffect } from 'react';
import { getBoardsThunk } from '@redux/boards/thunks';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { selectAllBoards, selectIsBoardsLoading } from '@redux/boards/selectors';

import BoardItem from './BoardItem';
import { BoardsListProps } from './types';

const BoardsList: React.FC<BoardsListProps> = ({ onBoardClick }) => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector(selectAllBoards);
  const isLoading = useAppSelector(selectIsBoardsLoading);

  useEffect(() => {
    dispatch(getBoardsThunk());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (boards.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 max-h-[192px] overflow-y-auto scroll-hidden">
      <ul>
        {boards
          .slice()
          .reverse()
          .map((board) => (
            <BoardItem key={board._id} board={board} onBoardClick={onBoardClick} />
          ))}
      </ul>
    </div>
  );
};

export default BoardsList;
