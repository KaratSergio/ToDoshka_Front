interface IAuthState {
  user: {
    name: string;
    email: string;
    avatarURL: string;
    _id: string;
    theme: string;
  };
  token: string;
  isLoading: boolean;
  isLogin: boolean;
  error: string | null;
}

export const initialAuthState: IAuthState = {
  user: { name: '', email: '', avatarURL: '', _id: '', theme: '' },
  token: '',
  isLoading: false,
  isLogin: false,
  error: null,
};
