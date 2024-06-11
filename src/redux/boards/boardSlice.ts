import {
  createSlice,
  PayloadAction,
  isAnyOf,
  CaseReducer,
} from '@reduxjs/toolkit';

import {
  getBoardsThunk,
  addBoardThunk,
  getBoardById,
  editBoardThunk,
  deleteBoardThunk,
} from './thunks';

import { Board, IBoardState } from './types';
import { initialBoardState } from './initialState';
import { handlePending, handleRejected } from '../stateHelpers';

const getBoardsFulfilledHandler: CaseReducer<
  IBoardState,
  PayloadAction<Board[]>
> = (state, action) => {
  state.error = null;
  state.isLoading = false;
  state.boards = action.payload;
};

const getBoardByIdFulfilledHandler: CaseReducer<
  IBoardState,
  PayloadAction<Board>
> = (state, action) => {
  state.error = null;
  state.isLoading = false;
  if (
    action.payload.columns &&
    action.payload.columns[0] &&
    action.payload.columns[0].hasOwnProperty('_id')
  ) {
    state.selectedBoard = action.payload;
  } else {
    state.selectedBoard = action.payload;
    state.selectedBoard.columns = [];
  }
};

const editBoardThunkFulfilledHandler: CaseReducer<
  IBoardState,
  PayloadAction<Board>
> = (state, action) => {
  state.isLoading = false;
  state.selectedBoard = action.payload;
  state.boards = state.boards.map((board) =>
    board._id === action.payload._id ? action.payload : board
  );
};

const deleteBoardThunkFulfilledHandler: CaseReducer<
  IBoardState,
  PayloadAction<string>
> = (state, action) => {
  state.isLoading = false;
  state.boards = state.boards.filter((board) => board._id !== action.payload);
  if (state.selectedBoard._id === action.payload) {
    state.selectedBoard = {} as Board;
  }
};

const boardSlice = createSlice({
  name: 'boards',
  initialState: initialBoardState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(
        isAnyOf(
          getBoardsThunk.pending,
          addBoardThunk.pending,
          getBoardById.pending,
          editBoardThunk.pending,
          deleteBoardThunk.pending
        ),
        handlePending
      )
      .addMatcher(isAnyOf(getBoardsThunk.fulfilled), getBoardsFulfilledHandler)
      .addMatcher(isAnyOf(getBoardById.fulfilled), getBoardByIdFulfilledHandler)
      .addMatcher(
        isAnyOf(editBoardThunk.fulfilled),
        editBoardThunkFulfilledHandler
      )
      .addMatcher(
        isAnyOf(deleteBoardThunk.fulfilled),
        deleteBoardThunkFulfilledHandler
      )
      .addMatcher(
        isAnyOf(
          getBoardsThunk.rejected,
          addBoardThunk.rejected,
          getBoardById.rejected,
          editBoardThunk.rejected,
          deleteBoardThunk.rejected
        ),
        handleRejected
      );
  },
});

export const boardReducer = boardSlice.reducer;
