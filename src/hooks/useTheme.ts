// import { useState, useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { changeThemeThunk } from '../redux/thunk/authThunk';
// // import { selectUserTheme } from '../redux/selectors/selector.js';

// export const useTheme = () => {
//   //   const dispatch = useDispatch();

//   //   const userTheme = useSelector(selectUserTheme);

//   //   const [theme, setTheme] = useState(userTheme || 'dark');
//   const [theme, setTheme] = useState<string>('violet');

//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme);

//     // dispatch(changeThemeThunk({ theme }));
//   }, [theme]);

//   return { theme, setTheme };
// };

import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};

export default useTheme;
