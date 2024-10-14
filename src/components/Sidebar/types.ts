import { Board } from '@redux/boards/types';

export interface SidebarProps {
  onBoardSelect: (boardId: string) => void;
}

export interface BoardsListProps {
  onBoardClick: (boardId: string) => void;
}

export interface BoardItemProps {
  board: Board;
  onBoardClick: (boardId: string) => void;
}
