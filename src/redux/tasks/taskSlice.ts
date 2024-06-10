import {
  createSlice,
  PayloadAction,
  isAnyOf,
  SerializedError,
} from '@reduxjs/toolkit';

import { initialTaskState } from './initialState';

// import { } from './types';

// import { } from './thunks';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialTaskState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const taskReducer = taskSlice.reducer;
