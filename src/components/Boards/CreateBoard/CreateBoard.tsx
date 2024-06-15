import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { toast } from 'react-toastify';
import sprite from '@assets/svg/sprite.svg';

import { icons, backgrounds } from '../../../schemas/constants';
import { titleSchema } from '../../../schemas/modalSchemas';
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '@redux/store';
import { addBoardThunk, getBoardsThunk } from '@redux/boards/thunks';
import { selectAllBoards } from '@redux/boards/selectors';

import { BoardData } from '../types';

const CreateBoard: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(titleSchema),
    mode: 'onChange',
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const existingBoardTitles = useAppSelector(selectAllBoards);

  const [selectedIcon, setSelectedIcon] = useState<string | undefined>(undefined);
  const [selectedBackgroundId, setSelectedBackgroundId] = useState<string | undefined>(undefined);

  useEffect(() => {
    dispatch(getBoardsThunk());
  }, [dispatch]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue('title', event.target.value.toString());
  };

  const handleIconSelect = (icon: string) => {
    setSelectedIcon(icon);
    setValue('icon', icon);
  };

  const handleBackgroundSelect = (backgroundId: string) => {
    setSelectedBackgroundId(backgroundId);
    setValue('background', backgroundId);
  };

  const renderIcons = () => {
    return icons.map((icon) => (
      <svg key={icon} onClick={() => handleIconSelect(icon)}>
        <use href={`${sprite}#${icon}`} />
      </svg>
    ));
  };

  const renderBackgrounds = () => {
    return backgrounds.map((item) => (
      <div key={item.id} onClick={() => handleBackgroundSelect(item.name)}>
        <img src={item.image} alt="Background" />
      </div>
    ));
  };

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
    if (selectedBackgroundId) {
      data.background = selectedBackgroundId;
    }

    dispatch(addBoardThunk(data))
      .then((action) => {
        if (action.payload && '_id' in action.payload && action.payload._id) {
          navigate(action.payload._id);
        } else {
          console.error('Invalid payload received:', action);
          throw new Error('Failed to extract _id from payload');
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
          <input
            type="text"
            placeholder="Title"
            {...register('title')}
            onChange={handleTitleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p className="text-red-500 text-xs mt-1">{errors.title?.message}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Icons</h3>
          <div className="grid grid-cols-4 gap-4">{renderIcons()}</div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Background</h3>
          <div className="grid grid-cols-4 gap-4">{renderBackgrounds()}</div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBoard;
