/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // All files in the app directory
    "./components/**/*.{js,ts,jsx,tsx}", // All files in the components directory (if any)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
