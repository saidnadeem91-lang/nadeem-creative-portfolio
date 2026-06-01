/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-gold': '#D4AF37',
        'luxury-blue': '#0EA5E9',
        'luxury-red': '#DC2626',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
        'arabic': ['Tajawal', 'sans-serif'],
        'arabic-display': ['Cairo', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(100px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
}
