import { useState } from 'react';
import useTheme from '@hooks/useTheme';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const selectTheme = (selectedTheme: string) => {
    toggleTheme(selectedTheme);
    setShowMenu(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        id="theme-menu-button"
        onClick={toggleMenu}
        aria-expanded="true"
        aria-haspopup="true"
      >
        Theme: {theme}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {showMenu && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="theme-menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <button
              className={`${
                theme === 'light' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              } block w-full text-left px-4 py-2 text-sm`}
              onClick={() => selectTheme('light')}
              role="menuitem"
              tabIndex={-1}
              id="theme-light"
            >
              Light Theme
            </button>
            <button
              className={`${
                theme === 'dark' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              } block w-full text-left px-4 py-2 text-sm`}
              onClick={() => selectTheme('dark')}
              role="menuitem"
              tabIndex={-1}
              id="theme-dark"
            >
              Dark Theme
            </button>
            <button
              className={`${
                theme === 'violet' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              } block w-full text-left px-4 py-2 text-sm`}
              onClick={() => selectTheme('violet')}
              role="menuitem"
              tabIndex={-1}
              id="theme-violet"
            >
              Violet Theme
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
