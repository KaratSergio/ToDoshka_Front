import { IBoardState, Board } from './types';

export const initialBoardState: IBoardState = {
  boards: [],
  selectedBoard: {} as Board,
  isLoading: false,
  error: null,
};
