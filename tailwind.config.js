/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f2f5',
          100: '#d9e0e8',
          200: '#b3c2d1',
          300: '#8da3ba',
          400: '#6784a3',
          500: '#41658c',
          600: '#2a4d6e',
          700: '#1a3a5c',
          800: '#0f2a4a',
          900: '#081a32',
          950: '#030d1f',
        },
        silver: {
          100: '#f5f7f9',
          200: '#e8ecf1',
          300: '#d1d9e3',
          400: '#a8b8c8',
          500: '#7a8fa4',
          600: '#5a6f85',
          700: '#3d4f63',
          800: '#263342',
          900: '#1a222c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(65, 101, 140, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(65, 101, 140, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
