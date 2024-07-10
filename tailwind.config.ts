import type { Config } from 'tailwindcss';
import colorsDark from './styles/themes/colorsDark';
import colorsLight from './styles/themes/colorsLight';
import colorsViolet from './styles/themes/colorsViolet';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      md: '768px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(196, 196, 196, 0) 5%, #bedbb0 95.19%)',
      },
      gap: {
        '14': '14px',
      },
      spacing: {
        '18': '18px',
      },
      width: {
        '473': '473px',
        '24': '24px',
        '260': '260px',
        '1440': '1440px',
      },
      height: {
        '24': '24px',
      },
      colors: {
        dark: colorsDark,
        light: colorsLight,
        violet: colorsViolet,
      },
    },
  },
  plugins: [],
};

export default config;
