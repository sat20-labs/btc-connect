/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  prefix: 'btc-',
  important: true,
  separator: '_',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a73e8',
          light: '#4285f4',
          dark: '#1557b0',
        },
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
