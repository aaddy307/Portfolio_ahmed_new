/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'bg-primary': '#0f0a1e',
        'bg-secondary': '#1a1129',
        'bg-tertiary': '#251a33',
        'text-primary': '#f5f3ff',
        'text-secondary': '#b8b0d0',
        'accent-primary': '#ff6b35',
        'accent-secondary': '#a855f7',
      },
      fontFamily: {
        'display': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'serif': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'body': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'spin-reverse': 'spin 20s linear infinite reverse',
        'pulse-glow': 'pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(5deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-5deg)' },
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
      zIndex: {
        '9990': '9990',
        '9998': '9998',
        '9999': '9999',
      },
    },
  },
  plugins: [],
}