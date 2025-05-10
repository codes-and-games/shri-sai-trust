/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6F6',
          100: '#DFEDED',
          200: '#B0C9C9',
          300: '#91B5B5',
          400: '#7D9D9C',
          500: '#5C7A79',
          600: '#465e5d',
          700: '#324342',
          800: '#1F2928',
          900: '#0D1110',
        },
        secondary: {
          50: '#FAF7F1',
          100: '#F5EFE4',
          200: '#EEE3D1',
          300: '#E4D1B9',
          400: '#D1B998',
          500: '#BEA077',
          600: '#A8875A',
          700: '#8B6F4B',
          800: '#6E583B',
          900: '#50402A',
        },
        accent: {
          50: '#FEF2E7',
          100: '#FDE5CF',
          200: '#FBCBA0',
          300: '#F9B170',
          400: '#F89341',
          500: '#F97B22',
          600: '#E85E02',
          700: '#B64902',
          800: '#833501',
          900: '#502000',
        },
        navy: {
          50: '#E6EEF3',
          100: '#CCDEE7',
          200: '#99BDCF',
          300: '#679CB7',
          400: '#34799F',
          500: '#22577A',
          600: '#1B4661',
          700: '#153549',
          800: '#0E2330',
          900: '#071218',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.7s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};