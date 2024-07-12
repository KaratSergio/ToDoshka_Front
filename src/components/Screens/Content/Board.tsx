import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@redux/store';

import { getBoardById } from '@redux/boards/thunks';
import { selectAllBoards } from '@redux/boards/selectors';
import Button from '../../Custom/CustomButton/Button';

const Board: React.FC = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector(selectAllBoards);
  const { boardId } = useParams<{ boardId: string }>();

  useEffect(() => {
    if (boardId) {
      const board = boards.find((board) => board._id === boardId);
      if (!board) {
        dispatch(getBoardById(boardId));
      }
    }
  }, [dispatch, boardId, boards]);

  return (
    <div>
      <div className="flex p-10">
        <Button className="bg-slate-300 p-2 rounded-md">Add another column</Button>
      </div>
    </div>
  );
};

export default Board;
