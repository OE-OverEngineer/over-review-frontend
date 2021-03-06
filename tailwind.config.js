module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#7433FF',
          purple2nd: '#BCA4FF',
          purpleDark2nd: '#53319E',
          defaultDark: '#45248C',
          defaultLight: '#85F0FF',
          defaultLight2nd: '#5734A8',
        },
      },
      zIndex: {
        '-10': '-10',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(114.44deg, #7433FF 0%, #BCA4FF 100%)',
      },
      height: {
        104: '416px',
        128: '512px',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'Prompt'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
