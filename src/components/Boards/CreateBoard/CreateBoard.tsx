import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';

import { addBoardSchema } from '@schemas/modalSchemas';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { addBoardThunk, getBoardsThunk } from '@redux/boards/thunks';
import { selectAllBoards } from '@redux/boards/selectors';

import Icons from './Icons';
import Backgrounds from './Backgrounds';
import Button from '@components/Custom/CustomButton/Button';
import Input from '@components/Custom/CustomInput/Input';

import Icon from '@helpers/Icon/Icon';
import { BoardData } from '../types';
import { closeModal } from '@redux/modal/modalSlice';
import { useSelectionHandlers } from '@hooks/useSelectionHandlers';

const CreateBoard: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addBoardSchema),
    mode: 'onChange',
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const existingBoardTitles = useAppSelector(selectAllBoards);

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

    // Check if the board title already exists
    const isExist = existingBoardTitles.some((item) => item.title.trim() === title.trim());

    if (isExist) {
      toast.error(`${data.title} already exists!`, {
        theme: 'colored',
        autoClose: 2500,
      });
      return;
    }

    // Set selected icon and background if available
    if (selectedIcon) {
      data.icon = selectedIcon;
    }
    if (selectedBackgroundName) {
      data.background = selectedBackgroundName;
    }

    // Dispatch the action to add the new board
    dispatch(addBoardThunk(data))
      .then((action) => {
        if (action.payload && '_id' in action.payload && action.payload._id) {
          navigate(action.payload._id);
          dispatch(closeModal());
        } else {
          console.error('Invalid response from the server:', action);
          throw new Error('Failed to extract _id from the response');
        }

        // Reset form values
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
            className="w-full py-2 px-4 border rounded-md text-white bg-indigo-600"
          >
            <Icon id="plus" width="w-6" height="h-6" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateBoard;