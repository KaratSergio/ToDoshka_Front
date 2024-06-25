import { IBoardState, Board } from './types';
import { RootState } from '../store';

// export const selectAllBoards = (state: { boards: IBoardState }) => state.boards.boards;
export const selectAllBoards = (state: RootState) => state.boards.boards;

export const selectIsBoardsLoading = (state: { boards: IBoardState }) => state.boards.isLoading;

export const selectError = (state: { boards: IBoardState }) => state.boards.error;

export const selectBoardById =
  (boardId: string) =>
  (state: { boards: IBoardState }): Board | undefined =>
    state.boards.boards.find((board) => board._id === boardId);
