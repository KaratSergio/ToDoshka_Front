import { IBoardState } from './types';

export const selectAllBoards = (state: { boards: IBoardState }) => state.boards.boards;
export const selectIsBoardsLoading = (state: { boards: IBoardState }) => state.boards.isLoading;
export const selectError = (state: { boards: IBoardState }) => state.boards.error;
