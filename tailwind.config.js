module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#B81005',
          'red-dark': '#940D05',
          'red-light': '#D61003',
          orange: '#FC542B',
          'orange-alt': '#FB6441',
        },
        site: {
          bg: '#AAAAAA',
          container: '#FFFFFF',
          footer: '#333333',
          'footer-text': '#8F8F8E',
          'footer-title': '#DDDDDD',
          'heading-gray': '#AAAAAA',
          'text-dark': '#333333',
          'text-heading': '#111111',
          'credit-text': '#CCCCCC',
          'top-menu-text': '#EEEEEE',
          'nav-link': '#B81005',
          'nav-active-bg': '#B81005',
          'nav-active-text': '#FFFFFF',
        },
      },
      fontFamily: {
        coda: ['var(--font-coda)', 'cursive', 'sans-serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        '33px': '33px',
        '23px': '23px',
        '20px': '20px',
        '13px': '13px',
        '11px': '11px',
      },
    },
  },
  plugins: [],
};
