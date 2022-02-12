module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      current: 'currentColor',
      default: '#424242',
      brand: {
        light: '#F2F8FF',
        DEFAULT: '#328BF2',
      },
      white: '#FFFFFF',
      gray: '#E8E8E8'
    },
    fontSize: {
      'title-large': '80px',
      'title': '48px',
      'title-small': '28px',
      'text-larger': '18px',
      'text': '16px',
      'text-small': '14px'
    },
    screens: {
      sm: '414px',
      md: '768px',
      lg: '1140px',
      xl: '1600px',
    },
    extend: {
      fontFamily: {
          sans: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
          nasa: ['Nasalization', 'Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingLeft: '24px',
          paddingRight: '24px',
          '@screen xl': {
            maxWidth: '1440px',
          },
        }
      });
    },
  ],
}