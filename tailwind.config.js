/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{liquid,html,js}'],
  theme: {
    extend: {},
    keyframes: {},
    fontFamily: {},
    colors: {},
  },
  plugins: [],
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
};
// npx tailwind -i tw-input.css -o ./assets/_custom.css --watch --minify
