import { createAsyncThunk } from '@reduxjs/toolkit';

import { currentUser, login, logout, register, sendHelp, updateUser } from './actions';

import { AuthBody, AuthResponse, UpdateUserParams, User } from './types'; // Імпорт необхідних типів

export const registerThunk = createAsyncThunk<AuthResponse, AuthBody>(
  'user/register',
  async (data, thunkAPI) => {
    try {
      const res = await register(data);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk<AuthResponse, AuthBody>(
  'user/login',
  async (data, thunkAPI) => {
    try {
      const res = await login(data);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk<{ message: string }, void>(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const res = await logout();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUserThunk = createAsyncThunk<User, void, { state: { auth: { token: string } } }>(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();
      const res = await currentUser(auth.token);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const updateUserThunk = createAsyncThunk<User, UpdateUserParams>(
  'auth/update',
  async (userData, thunkAPI) => {
    try {
      const res = await updateUser(userData.formData);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const changeThemeThunk = createAsyncThunk<string, string>(
//   "auth/theme",
//   async (data, thunkAPI) => {
//     try {
//       const res = await changeThemeThunk(data);
//       return res.data.theme;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const sendHelpThunk = createAsyncThunk<any, any>('auth/needHelp', async (data, thunkAPI) => {
  try {
    const res = await sendHelp(data);
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
