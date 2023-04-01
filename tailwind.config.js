/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primarydark: '#4287f5',
      },
      fontFamily:{
        poppins: 'Poppins',
        notosans: 'Noto Sans'
      }
    },
  },
  plugins: [],
}

