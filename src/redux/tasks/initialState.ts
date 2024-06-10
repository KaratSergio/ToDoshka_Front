interface ITaskState {
  isLoading: boolean;
  isLogin: boolean;
  error: string | null;
}

export const initialTaskState: ITaskState = {
  isLoading: false,
  isLogin: false,
  error: null,
};
