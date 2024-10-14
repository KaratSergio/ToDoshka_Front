import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@redux/store';

import { getBoardById } from '@redux/boards/thunks';
import { selectAllBoards } from '@redux/boards/selectors';
import AddButton from '../../Custom/CustomButton/AddButton';

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
      <div className="flex items-center justify-center text-[var(--color-font)] w-[334px] m-5 py-[14px] bg-[var(--bg-sidebar)] rounded-md">
        <AddButton
          className="bg-white mr-2"
          iconStyles={{
            color: 'stroke-black',
            size: 'w-4 h-4',
          }}
        />
        <p>Add another column</p>
      </div>
    </div>
  );
};

export default Board;
