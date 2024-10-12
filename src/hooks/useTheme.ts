import { useState, useEffect } from 'react';
import { useAppSelector } from '@redux/store';
import { selectUserTheme } from '@redux/auth/selectors';

import colorsDark from '@styles/themes/colorsDark';
import colorsLight from '@styles/themes/colorsLight';
import colorsViolet from '@styles/themes/colorsViolet';

const useTheme = () => {
  const userTheme = useAppSelector(selectUserTheme);
  const [theme, setTheme] = useState<string>(userTheme || 'light');

  // Функція для встановлення CSS-змінних
  const setThemeColors = (themeColors: { [key: string]: string }) => {
    const root = document.documentElement;
    Object.keys(themeColors).forEach((key) => {
      root.style.setProperty(`--${key}`, themeColors[key]);
    });
  };

  // Оновлення теми
  useEffect(() => {
    switch (theme) {
      case 'dark':
        setThemeColors(colorsDark);
        break;
      case 'violet':
        setThemeColors(colorsViolet);
        break;
      case 'light':
      default:
        setThemeColors(colorsLight);
        break;
    }
    // Застосовуємо клас теми на рівні HTML
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};

export default useTheme;
