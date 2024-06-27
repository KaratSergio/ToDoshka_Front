import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { addBoardSchema } from '@schemas/addBoardSchemas';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { addBoardThunk, getBoardsThunk } from '@redux/boards/thunks';
import { selectAllBoards } from '@redux/boards/selectors';

import Icons from './Icons';
import Backgrounds from './Backgrounds';
import Button from '@components/Custom/CustomButton/Button';
import Input from '@components/Custom/CustomInput/Input';

import Icon from '@components/Icon/Icon';
import { BoardData } from '../types';
import { closeModal } from '@redux/modal/modalSlice';
import { useSelectionHandlers } from '@hooks/useSelectionHandlers';

const CreateBoard: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BoardData>({
    resolver: yupResolver(addBoardSchema),
    mode: 'onChange',
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const existingBoardTitles = useAppSelector(selectAllBoards);

  console.log('====================================');
  console.log('aaaaaaaa', existingBoardTitles);
  console.log('====================================');

  const {
    selectedIcon,
    selectedBackgroundName,
    handleIconSelect,
    handleBackgroundSelect,
    handleInputChange,
  } = useSelectionHandlers(setValue);

  useEffect(() => {
    dispatch(getBoardsThunk());
  }, [dispatch]);

  const handleCreateBoard = (data: BoardData) => {
    const { title } = data;
    const isExist = existingBoardTitles.some((item) => item.title.trim() === title.trim());

    if (isExist) {
      toast.error(`${data.title} already exists!`, {
        theme: 'colored',
        autoClose: 2500,
      });
      return;
    }

    if (selectedIcon) {
      data.icon = selectedIcon;
    }
    if (selectedBackgroundName) {
      data.background = selectedBackgroundName;
    }

    dispatch(addBoardThunk(data))
      .then((action) => {
        if (action.payload && '_id' in action.payload && action.payload._id) {
          dispatch(getBoardsThunk());
          dispatch(closeModal());

          navigate(`/home/board/${action.payload._id}`);
        } else {
          console.error('Invalid response from the server:', action);
          throw new Error('Failed to extract _id from the response');
        }

        setValue('title', '');
        setValue('icon', undefined);
        setValue('background', undefined);
      })
      .catch((error: any) => {
        console.error('Failed to create board:', error);
        toast.error('Failed to create board. Please try again later.', {
          theme: 'colored',
          autoClose: 2500,
        });
      });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">New Board</h2>

      <form onSubmit={handleSubmit(handleCreateBoard)} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Title"
            {...register('title')}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="text-red-500 text-xs mt-1">{errors.title?.message}</p>
        </div>

        <Icons selectedIcon={selectedIcon} handleIconSelect={handleIconSelect} />

        <Backgrounds
          selectedBackgroundName={selectedBackgroundName}
          handleBackgroundSelect={handleBackgroundSelect}
        />

        <div>
          <Button
            type="submit"
            className="w-full py-2 px-4 border rounded-md text-white bg-indigo-600 flex items-center justify-center"
          >
            <Icon id="plus" width="w-6" height="h-6" className="mr-2" />
            Create Board
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateBoard;
