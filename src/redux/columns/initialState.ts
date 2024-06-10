interface IColumnState {
  isLoading: boolean;
  isLogin: boolean;
  error: string | null;
}

export const initialColumnState: IColumnState = {
  isLoading: false,
  isLogin: false,
  error: null,
};
