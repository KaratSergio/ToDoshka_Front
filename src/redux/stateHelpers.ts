import { PayloadAction, SerializedError } from '@reduxjs/toolkit';

// Функція для обробки стану pending
export const handlePending = <
  T extends { isLoading: boolean; error: null | string },
>(
  state: T
) => {
  state.isLoading = true;
  state.error = null;
};

// Функція для обробки стану rejected
export const handleRejected = <
  T extends { isLoading: boolean; error: null | string },
>(
  state: T,
  action: PayloadAction<unknown, string, any, SerializedError>
) => {
  state.isLoading = false;
  state.error = action.error.message || 'An error occurred';
};
