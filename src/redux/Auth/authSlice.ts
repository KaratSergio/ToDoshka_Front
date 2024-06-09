import { createSlice, PayloadAction, isAnyOf, SerializedError } from "@reduxjs/toolkit";
import { initialAuthState } from "../services/services";

import { AuthResponse, User } from "./types/interface";
import { currentUserThunk, loginThunk, logoutThunk, registerThunk, sendHelpThunk, updateUserThunk } from "./authThunk";
import { handlePending, handleRejected } from "./helpers/helpers";


const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isLogin = false;
        state.user = { name: "", email: "", avatarURL: "", _id: "", theme: "" };
        state.token = "";
      })
      .addCase(currentUserThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateUserThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.avatarURL = action.payload.avatarURL;
        state.user._id = action.payload._id;
        state.isLogin = true;
        state.isLoading = false;
      })
      .addCase(sendHelpThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        // Додаткові дії після успішного виконання sendHelpThunk
      })
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          currentUserThunk.pending,
          updateUserThunk.pending,
          sendHelpThunk.pending
          // changeThemeThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected,
          currentUserThunk.rejected,
          updateUserThunk.rejected,
          sendHelpThunk.rejected
          // changeThemeThunk.rejected
        ),
        handleRejected
      );
  }
});

export const authReducer = authSlice.reducer;