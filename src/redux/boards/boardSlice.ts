import {
  createSlice,
  PayloadAction,
  isAnyOf,
  SerializedError,
} from '@reduxjs/toolkit';
import { initialBoardState } from './initialState';

// import { } from './types';

// import { } from './thunks';

import { handlePending, handleRejected } from '../stateHelpers';

const boardSlice = createSlice({
  name: 'auth',
  initialState: initialBoardState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const boardReducer = boardSlice.reducer;
