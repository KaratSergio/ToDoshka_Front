import { Board } from './types';
import { RootState } from '../store';
import { CustomThunkConfig } from '../helpers/types';
import thunkMiddleware from '../helpers/thunkMiddleware';
import { getAllBoards, addBoard, getBoard, editBoard, deleteBoard } from './actions';

export const getBoardsThunk = thunkMiddleware<Board[], void, CustomThunkConfig>(
  'boards/getBoard',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.auth.token;
    return await getAllBoards(token);
  }
);

export const addBoardThunk = thunkMiddleware<Board, Board, CustomThunkConfig>(
  'boards/addBoard',
  async (body) => {
    return await addBoard(body);
  }
);

export const getBoardById = thunkMiddleware<Board, string, CustomThunkConfig>(
  'boards/singleBoard',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.auth.token;
    return await getBoard(token, id);
  }
);

export const editBoardThunk = thunkMiddleware<
  Board,
  { token: string; id: string; board: Board },
  CustomThunkConfig
>('boards/editBoard', async ({ token, id, board }, _) => {
  return await editBoard(token, id, board);
});

export const deleteBoardThunk = thunkMiddleware<
  string,
  { token: string; id: string },
  CustomThunkConfig
>('boards/deleteBoard', async (params, _) => {
  const { token, id } = params;
  await deleteBoard(token, id);
  return id;
});
