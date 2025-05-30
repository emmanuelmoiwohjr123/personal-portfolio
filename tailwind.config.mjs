/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-particle': 'float-particle 20s ease-in-out infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slow-spin': 'slow-spin 60s linear infinite',
      },
      keyframes: {
        'float-particle': {
          '0%, 100%': { 
            transform: 'translateY(0) translateX(0)',
            opacity: 0
          },
          '25%': { 
            transform: 'translateY(-30px) translateX(20px)',
            opacity: 0.8
          },
          '50%': { 
            transform: 'translateY(-60px) translateX(-20px)',
            opacity: 0.4
          },
          '75%': { 
            transform: 'translateY(-30px) translateX(-40px)',
            opacity: 0.6
          }
        },
        'pulse': {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 0.2 },
        },
        'slow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
