import { initialAuthState } from "@/redux/services/services";
import { PayloadAction, SerializedError } from "@reduxjs/toolkit";

// Функція для обробки стану pending
export const handlePending = (state: typeof initialAuthState) => {
  state.isLoading = true;
  state.error = null;
};

// Функція для обробки стану rejected
export const handleRejected = (
  state: typeof initialAuthState,
  action: PayloadAction<unknown, string, any, SerializedError>
) => {
  state.isLoading = false;
  state.error = action.error.message || "An error occurred";
};