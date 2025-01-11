/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Use imported daisyui here instead of require
  daisyui: {
    themes: ["light"], // Optionally, you can set themes like "dark", "cupcake", etc.
  },
};
