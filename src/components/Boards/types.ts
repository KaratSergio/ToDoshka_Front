import { Board } from '@redux/boards/types';

export interface BoardData {
  title: string;
  icon?: string | undefined;
  background?: string | undefined;
}

export interface BackgroundItem {
  id: string;
  name: string;
  image: string;
}

export interface RenderBackgroundsProps {
  selectedBackgroundName: string | undefined;
  handleBackgroundSelect: (backgroundId: string) => void;
}

export interface RenderIconsProps {
  selectedIcon: string | undefined;
  handleIconSelect: (icon: string) => void;
}

export interface BoardsListProps {
  onBoardClick: (boardId: string) => void;
}

export interface BoardItemProps {
  board: Board;
  onBoardClick: (boardId: string) => void;
}
