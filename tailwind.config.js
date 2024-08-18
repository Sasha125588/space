/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        saturn: "url('https://i.ibb.co/TTtXrpn/main-saturn.jpg')",
        solarSystem: "url('https://www.solarsystemscope.com/textures/download/2k_stars.jpg')"
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        yellow: '#FFFF00',
        primary: '#B63E96', // 240,86,199
        primaryDark: '#58E6D9', // 80,230,217
        bgAuth: '#043f34'
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
    },
    plugins: [],
  },
};
