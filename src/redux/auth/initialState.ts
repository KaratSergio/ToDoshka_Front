import { IAuthState } from './types';

export const initialAuthState: IAuthState = {
  user: { name: '', email: '', avatarURL: '', _id: '', theme: '' },
  token: '',
  isLoading: false,
  isLogin: false,
  error: null,
};
