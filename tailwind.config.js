/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      clearBlack: 'rgba(0, 0, 0, 0.5)',
      clearWhite: 'rgba(255, 255, 255, 0.2)',
    },
    animation: {
      'bounce-slow': 'bounce 5s ease-in-out infinite',
      'bounce-float': 'floating 3s ease-in-out infinite',
      'slide-from-right': 'slidefromright 0.25s ease-in-out',
      'slide-from-right-mobile': 'slidefromrightmobile 0.25s ease-in-out',
    },
    keyframes: {
      floating: {
        '0%, 100%': { transform: 'translatey(0)' },
        '50%': { transform: 'translatey(3%)' },
      },
    },
    extend: {
      backgroundImage: {
        flag: 'url(/americanflag.png)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        patriot: ['Patriot', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
