import React, { useEffect } from 'react';

import { getBoardsThunk } from '@redux/boards/thunks';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { selectAllBoards, selectIsBoardsLoading } from '@redux/boards/selectors';

const BoardsList: React.FC = () => {
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

  const reversedBoards = [...boards].reverse();

  return (
    <div className="mt-10 max-h-[182px] overflow-y-auto">
      <ul>
        {reversedBoards.map((board) => (
          <li className="py-5 pr-6" key={board._id}>
            {board.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardsList;
