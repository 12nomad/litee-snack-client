/** @type {import('tailwindcss').Config} */
import * as flowbite from 'flowbite/plugin';
import * as defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['"Lobster"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'rusty-red': '#DE3C4B',
        'rusty-red-shade': '#c83644',
        'rusty-red-tint': '#e1505d',
        'electric-blue': '#87F5FB',
        'electric-blue-shade': '#7adde2',
        'electric-blue-tint': '#93f6fb',
        'icterine-yellow': '#FCFF6C',
        'icterine-yellow-shade': '#e3e661',
        'icterine-yellow-tint': '#fcff7b',
        'night-black': '#01110A',
      },
    },
  },
  plugins: [flowbite],
};
