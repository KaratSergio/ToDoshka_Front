import { PersistPartial } from 'redux-persist/lib/persistReducer';
import { IBoardState } from '../boards/types';
import { IColumnState } from '../columns/types';
import { IModalState } from '../modal/types';
import { ITaskState } from '../tasks/types';

export interface User {
  name: string;
  email: string;
  avatarURL: string;
  _id: string;
  theme: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken?: string;
}

export interface AuthBody {
  name?: string;
  email: string;
  password: string;
}

export interface HelpBody {
  email: string;
  text: string;
}

export interface UpdateUserParams {
  formData: FormData;
}
//initialStatets
export interface IUser {
  name: string;
  email: string;
  avatarURL: string;
  _id: string;
  theme: string;
}

export interface IAuthState {
  user: IUser;
  token: string;
  isLoading: boolean;
  isLogin: boolean;
  error: string | null;
}

// types.ts

export interface IUser {
  name: string;
  email: string;
  avatarURL: string;
  _id: string;
  theme: string;
}

export interface IAuthState {
  user: IUser;
  token: string;
  isLoading: boolean;
  isLogin: boolean;
  error: string | null;
}

// Додайте інші розділи стану, якщо потрібно
export interface IAppState {
  auth: IAuthState;
  boards: IBoardState;
  columns: IColumnState;
  tasks: ITaskState;
  modal: IModalState;
}

// В залежності від вашої конфігурації редуктора, можливо, вам потрібно буде додати PersistPartial до розділів стану
export interface RootState {
  auth: IAuthState;
  // boards: IBoardState & PersistPartial;
  // columns: IColumnState & PersistPartial;
  // tasks: ITaskState & PersistPartial;
  // modal: IModalState;
}
