import { PayloadAction, SerializedError } from '@reduxjs/toolkit';

export const handlePending = <T extends { isLoading: boolean; error: null | string }>(state: T) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = <T extends { isLoading: boolean; error: null | string }>(
  state: T,
  action: PayloadAction<unknown, string, any, SerializedError>
) => {
  state.isLoading = false;
  state.error = action.error.message || 'An error occurred';
};
