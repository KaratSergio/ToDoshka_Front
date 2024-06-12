import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      md: '768px',
      // => @media (min-width: 768px) { ... }

      xl: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      gap: {
        '14': '14px',
      },
      spacing: {
        '18': '18px',
      },
      width: {
        '24': '24px',
        '260': '260px',
        '375': '375px',
        '1180': '1180px',
        '1440': '1440px',
      },
      height: {
        '24': '24px',
      },
    },
  },
  plugins: [],
};
export default config;
