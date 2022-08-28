const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{html,ejs,js}'],
  theme: {
    screens: {
      sm: '768px',
      md: '992px',
      lg: '1440px',
    },
    fontFamily: {
      sans: ['Noto Sans TC', ...fontFamily.sans],
    },
    container: {
      center: true,
      padding: '0.75rem',
    },
    extend: {
      colors: {
        primary: '#E6553B',
        gray: {
          DEFAULT: '#F0F0F0',
          dark: '#808080',
          transparent: '#00000029',
        },
        green: '#53C139',
      },
      fontSize: {
        sm: ['.875rem', '1.5'], //
        base: ['1rem', '1.5'], //
        lg: ['1.125rem', '1.5'], //
        xl: ['1.25rem', '1.5'], //
        '2xl': ['1.5rem', '1.5'], //
        '3xl': ['2rem', '1.5'], //2rem
        '4xl': ['2.25rem', '1.5'],
        '5xl': ['3rem', '1.5'], //
        '7xl': ['5rem'], //
      },
      fontFamily: {
        squada: ['Squada One', ...fontFamily.sans],
      },
      opacity: {
        85: '0.85',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({addComponents}) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '768px',
          },
          '@screen md': {
            maxWidth: '984px',
          },
          '@screen lg': {
            maxWidth: '1320px',
          },
        },
      });
    },
  ],
};
