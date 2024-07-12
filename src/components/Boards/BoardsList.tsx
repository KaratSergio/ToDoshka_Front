import { useEffect } from 'react';
import { getBoardsThunk } from '@redux/boards/thunks';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { selectAllBoards, selectIsBoardsLoading } from '@redux/boards/selectors';

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
    <div className="mt-10 max-h-[182px] overflow-y-auto">
      <ul>
        {boards
          .slice()
          .reverse()
          .map((board) => (
            <li
              className="py-5 pr-6 cursor-pointer"
              key={board._id}
              onClick={() => {
                if (board._id) {
                  onBoardClick(board._id);
                }
              }}
            >
              {board.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BoardsList;
