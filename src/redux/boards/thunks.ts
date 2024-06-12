import { Board } from './types';
import thunkMiddleware from '../helpers/thunkMiddleware';

import { addBoard, getBoard, editBoard, deleteBoard, getAllBoards } from './actions';

export const getBoardsThunk = thunkMiddleware<Board[], void, { rejectValue: { message: string } }>(
  'boards/getBoard',
  async () => {
    return await getAllBoards();
  }
);

export const addBoardThunk = thunkMiddleware<Board, Board, { rejectValue: { message: string } }>(
  'boards/addBoard',
  async (body) => {
    return await addBoard(body);
  }
);

export const getBoardById = thunkMiddleware<Board, string, { rejectValue: { message: string } }>(
  'boards/singleBoard',
  async (id) => {
    return await getBoard(id);
  }
);

export const editBoardThunk = thunkMiddleware<
  Board,
  { id: string; board: Board },
  { rejectValue: { message: string } }
>('boards/editBoard', async ({ id, board }) => {
  return await editBoard(id, board);
});

export const deleteBoardThunk = thunkMiddleware<
  string,
  string,
  { rejectValue: { message: string } }
>('boards/deleteBoard', async (id) => {
  await deleteBoard(id);
  return id;
});
