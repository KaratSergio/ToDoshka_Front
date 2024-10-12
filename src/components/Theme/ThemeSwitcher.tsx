import { useState } from 'react';
import useTheme from '@hooks/useTheme';
import { changeThemeThunk } from '@redux/auth/thunks';
import { useAppDispatch } from '@redux/store';
import Icon from '../Icon/Icon';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const selectTheme = (selectedTheme: string) => {
    toggleTheme(selectedTheme);
    dispatch(changeThemeThunk(selectedTheme));
    setShowMenu(false);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="
        bg-[var(--bg-header)] text-[var(--color-font)] inline-flex justify-center w-full px-4 py-2 text-sm font-medium  focus:outline-none"
        id="theme-menu-button"
        onClick={toggleMenu}
        aria-expanded="true"
        aria-haspopup="true"
      >
        Theme
        <Icon id="chevron-down" width="w-5" height="h-5" strokeColor="stroke-[var(--color-font)]" />
      </button>

      {showMenu && (
        <div
          className="origin-top-right absolute right-3 top-6 mt-2 w-20 rounded-md bg-[var(--bg-header)] border border-gray-200 text-[var(--color-font)] focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="theme-menu-button"
          tabIndex={-1}
        >
          <div className="py-1 flex flex-col gap-2 text-sm" role="none">
            <button
              onClick={() => selectTheme('light')}
              role="menuitem"
              tabIndex={-1}
              id="theme-light"
            >
              Light
            </button>
            <button
              onClick={() => selectTheme('dark')}
              role="menuitem"
              tabIndex={-1}
              id="theme-dark"
            >
              Dark
            </button>
            <button
              onClick={() => selectTheme('violet')}
              role="menuitem"
              tabIndex={-1}
              id="theme-violet"
            >
              Violet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
