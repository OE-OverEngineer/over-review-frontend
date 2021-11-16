module.exports = {
  purge: [''],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#7433FF',
          purple2nd: '#BCA4FF',
          defaultDark: '#432695',
        },
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(114.44deg, #7433FF 0%, #BCA4FF 100%)',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'Prompt'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
