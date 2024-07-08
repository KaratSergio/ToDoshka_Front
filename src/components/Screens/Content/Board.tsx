import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@redux/store';

import { getBoardById } from '@redux/boards/thunks';
import { selectAllBoards } from '@redux/boards/selectors';
import Button from '../../Custom/CustomButton/Button';

const Board = () => {
  const { boardId } = useParams<{ boardId: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const boards = useAppSelector(selectAllBoards);

  console.log('====================================');
  console.log('NEWboards', boards);
  console.log('====================================');

  useEffect(() => {
    if (boardId) {
      const board = boards.find((board) => board._id === boardId);
      if (board) {
        dispatch(getBoardById(boardId))
          .then(() => {
            navigate(`/home/board/${boardId}`);
          })
          .catch((error) => {
            console.error('Failed to fetch board:', error);
          });
      }
    }
  }, [dispatch, navigate, boardId, boards]);

  return (
    <div className="bg-gray-300 ">
      <div className="flex">
        <Button>Add another column</Button>
      </div>
    </div>
  );
};

export default Board;
