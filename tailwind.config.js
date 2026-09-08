/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1220',
        panel: '#121B2E',
        rule: '#223049',
        gold: '#C99A44',
        teal: '#4FB8B0',
        paper: '#EDEEF2',
        muted: '#8892A6',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Sora"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
