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
  avatar?: FileList;
  name: string;
  email: string;
  password: string;
}

export interface IAuthState {
  user: User;
  token: string;
  isLoading: boolean;
  isLogin: boolean;
  error: string | null;
}

export interface IAppState {
  auth: IAuthState;
  boards: IBoardState;
  columns: IColumnState;
  tasks: ITaskState;
  modal: IModalState;
}

export interface RootState {
  auth: IAuthState;
  boards: IBoardState;
  // columns: IColumnState;
  // tasks: ITaskState;
  // modal: IModalState;
}
