import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialModalState } from './initialState';

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    openModal: (state, action: PayloadAction<React.ReactNode>) => {
      state.isVisible = true;
      state.content = action.payload;
    },
    closeModal: (state) => {
      state.isVisible = false;
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
