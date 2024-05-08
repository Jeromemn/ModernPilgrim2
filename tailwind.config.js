/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xsm: '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      'light-green': '#606c38',
      green: '#283618',
      tan: '#fffdf2',
      'light-brown': '#dda15e',
      brown: '#bc6c25',
      black: '#212529',
      'dark-black': '#000',
      white: '#fff',
      grey: 'rgba(33,37,41,0.47)',
      'light-brown-faded': 'rgba(221,161,94,0.75)',
      red: 'rgba(220,71,71,0.85)',
    },
    fontFamily: {
      salsa: ['Salsa', 'cursive'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
