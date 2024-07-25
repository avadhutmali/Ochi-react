/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'founders-grotesk': ['"Founders Grotesk"', 'sans-serif'],
        'neue-montreal': ['"Neue Montreal"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
