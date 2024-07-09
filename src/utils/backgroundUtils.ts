import { boardsData } from './constants';

interface BoardItem {
  name: string;
  image: string;
}

export const setDevice = () => {
  if (window.innerWidth <= 375) {
    return 'mob';
  }
  if (window.innerWidth <= 768) {
    return 'tab';
  }
  return 'desk';
};

export const isRetina = () => {
  return window.devicePixelRatio > 1 ? '2x' : '1x';
};

export const getBackgroundUrl = (background: string | undefined) => {
  if (background === 'default' || !background) {
    return boardsData.find((item: BoardItem) => item.name === 'default-desk-1x')?.image ?? null;
  } else {
    const device = setDevice();
    const ratio = isRetina();
    const imageName = `${background}-${device}-${ratio}.jpg`;
    const imageUrl = boardsData.find((item: BoardItem) => item.name === imageName)?.image ?? null;
    return imageUrl;
  }
};
