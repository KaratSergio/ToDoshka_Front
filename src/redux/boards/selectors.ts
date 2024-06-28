import { RootState } from '../store';

export const selectAllBoards = (state: RootState) => state.boards.boards;

export const selectBoardById = (state: RootState) => state.boards.selectedBoard;

export const selectIsBoardsLoading = (state: RootState) => state.boards.isLoading;

export const selectError = (state: RootState) => state.boards.error;
