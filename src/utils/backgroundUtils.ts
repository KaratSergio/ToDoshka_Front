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
    return null;
  } else {
    const device = setDevice();
    const ratio = isRetina();
    return `/assets/img/${background}-${device}-${ratio}.jpg`;
  }
};
