import { Board } from './types';
import { RootState } from '../store';

export const selectAllBoards = (state: RootState) => state.boards.boards;

export const selectIsBoardsLoading = (state: RootState) => state.boards.isLoading;

export const selectError = (state: RootState) => state.boards.error;

export const selectBoardById =
  (boardId: string) =>
  (state: RootState): Board | undefined =>
    state.boards.boards.find((board) => board._id === boardId);
