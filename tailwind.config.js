/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        mainBg: '#F7F8F9',

        textColor: '#868686',
        textColor2: '#212121',

        borderColor: '#FAFAFA',
      },
      boxShadow: {
        profShadow: '0px 16px 40px -8px rgba(51, 17, 51, 0.16)',
        menuShadow: '0px 16px 40px -8px rgba(112, 144, 176, 0.16)',
      },
    },
  },
  plugins: [],
}
