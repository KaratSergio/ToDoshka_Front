interface IBoardState {
  isLoading: boolean;
  isLogin: boolean;
  error: string | null;
}

export const initialBoardState: IBoardState = {
  isLoading: false,
  isLogin: false,
  error: null,
};
