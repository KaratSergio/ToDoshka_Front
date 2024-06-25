import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardById } from '@redux/boards/thunks';
import { selectAllBoards } from '@redux/boards/selectors';
import Button from '../Custom/CustomButton/Button';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '@redux/store';

const NewBoard = () => {
  const { boardId } = useParams<{ boardId?: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const boards = useSelector(selectAllBoards);

  console.log('====================================');
  console.log(boards);
  console.log('====================================');

  useEffect(() => {
    if (boardId) {
      const board = boards?.find((board) => board._id === boardId);
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
    <div className="container min-h-screen">
      <div className="columns_container flex gap-18 overflow-auto pb-24 pt-5 pl-24">
        <Button>Add another column</Button>
      </div>
    </div>
  );
};

export default NewBoard;
