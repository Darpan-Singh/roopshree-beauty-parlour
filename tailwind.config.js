/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          primary: '#C9507B',
          light: '#F4A8C3',
          dark: '#9B2559',
          50: '#FFF0F6',
          100: '#FFD6E8',
        },
        gold: {
          primary: '#C9A84C',
          light: '#EDD98A',
          dark: '#9A7A1E',
          50: '#FFFBEE',
        },
        cream: '#FDF5F8',
        blush: '#FCE4EC',
        parlour: {
          dark: '#2D0A1A',
          mid: '#5C1A3A',
          light: '#8B3060',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2D0A1A 0%, #5C1A3A 45%, #C9507B 80%, #C9A84C 100%)',
        'card-gradient': 'linear-gradient(135deg, #FFF0F6 0%, #FDF5F8 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #EDD98A 50%, #C9A84C 100%)',
        'dark-gradient': 'linear-gradient(135deg, #2D0A1A 0%, #5C1A3A 100%)',
        'rose-gradient': 'linear-gradient(135deg, #C9507B 0%, #9B2559 100%)',
        'radial-rose': 'radial-gradient(ellipse at center, #5C1A3A 0%, #2D0A1A 70%)',
      },
      boxShadow: {
        'rose':    '0 8px 32px -4px rgba(201, 80, 123, 0.28)',
        'rose-lg': '0 20px 48px -8px rgba(201, 80, 123, 0.35)',
        'gold':    '0 8px 32px -4px rgba(201, 168, 76, 0.28)',
        'glass':   '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        'inner-rose': 'inset 0 2px 8px rgba(201, 80, 123, 0.15)',
      },
      animation: {
        'float':        'float 4s ease-in-out infinite',
        'float-delay':  'floatDelayed 5s ease-in-out 1.2s infinite',
        'float-slow':   'float 7s ease-in-out infinite',
        'pulse-gold':   'pulseGold 2s ease-in-out infinite',
        'gradient':     'gradientFlow 4s linear infinite',
        'spin-slow':    'spinSlow 20s linear infinite',
        'fade-in-up':   'fadeInUp 0.65s ease-out both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0.4)' },
          '50%':      { boxShadow: '0 0 0 15px rgba(201,168,76,0)' },
        },
        gradientFlow: {
          '0%':   { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
