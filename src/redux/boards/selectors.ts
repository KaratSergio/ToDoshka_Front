import { IBoardState } from './types';

export const selectBoards = (state: { boards: IBoardState }) =>
  state.boards.boards;
export const selectLoading = (state: { boards: IBoardState }) =>
  state.boards.isLoading;
export const selectError = (state: { boards: IBoardState }) =>
  state.boards.error;
