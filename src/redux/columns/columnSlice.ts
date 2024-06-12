import { createSlice, PayloadAction, isAnyOf, SerializedError } from '@reduxjs/toolkit';
import { initialColumnState } from './initialState';

// import { } from './types';

// import { } from './thunks';

import { handlePending, handleRejected } from '../helpers/stateHelpers';

const columnSlice = createSlice({
  name: 'columns',
  initialState: initialColumnState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const columnReducer = columnSlice.reducer;
