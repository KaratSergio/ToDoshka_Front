export interface Board {
  _id?: string;
  title: string;
  icon?: string;
  background?: string;
  assignees?: string[];
  columns?: string[];
}

export interface IBoardState {
  boards: Board[];
  selectedBoard: Board;
  isLoading: boolean;
  error: null | string;
}
