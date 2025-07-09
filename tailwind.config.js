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
        mainBg2: '#FFF',

        textColor: '#868686',
        textColor2: '#212121',

        textBlack: '#030303',

        borderColor: '#FAFAFA',
        borderColor2: '#E2E2E2',

        waveColorG: '#0ACF83',
        waveColorG2: '#0ACF8314',
        waveColorO: '#FA6B11',
        waveColorO2: 'rgba(250,107,17,0.08)',
      },
      boxShadow: {
        profShadow: '0px 16px 40px -8px rgba(51, 17, 51, 0.16)',
        menuShadow: '0px 16px 40px -8px rgba(112, 144, 176, 0.16)',
      },
      animation: {
        'ping-fast': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
}
