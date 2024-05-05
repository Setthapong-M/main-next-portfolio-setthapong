/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-black': '#222222',
        'green-indust': '#B5C69C',
        'grey-bg': '#1E1E1E',
        'grey-hold': '#717171',
      },
      fontFamily: {
        sans: ['var(--font-sukhumvit)']
      }
    },
  },
  plugins: [],
};
