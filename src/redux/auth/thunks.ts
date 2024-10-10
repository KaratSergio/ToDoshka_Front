import { currentUser, login, logout, register, sendHelp, updateUser } from './actions';
import { AuthBody, AuthResponse, User } from './types';
import thunkMiddleware from '../helpers/thunkMiddleware';

export const registerThunk = thunkMiddleware<AuthResponse, AuthBody>(
  'user/register',
  async (data, _) => {
    const res = await register(data);
    return res;
  }
);

export const loginThunk = thunkMiddleware<AuthResponse, AuthBody>('user/login', async (data, _) => {
  const res = await login(data);
  return res;
});

export const logoutThunk = thunkMiddleware<{ message: string }, void>('user/logout', async () => {
  const res = await logout();
  return res;
});

export const currentUserThunk = thunkMiddleware<User>(
  'auth/current',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const res = await currentUser(auth.token);
    return res;
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return !!auth.token;
      }
    },
  }
);

export const updateUserThunk = thunkMiddleware<User, FormData>(
  'auth/update',
  async (userData, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const res = await updateUser(userData);
    return res;
  }
);

export const sendHelpThunk = thunkMiddleware<any, any>('auth/needHelp', async (data, _) => {
  const res = await sendHelp(data);
  return res;
});

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
