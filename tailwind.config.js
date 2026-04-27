/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
      },
      colors: {
        'dark-bg': '#0b011d',
        'dark-card': '#17171a',
        'purple-accent': '#7e3dff',
        'purple-light': '#a880ff',
        'green-accent': '#4ff543',
        'green-glow': 'rgba(79, 245, 67, 0.32)',
      },
      keyframes: {
        'css-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'button-reflection': {
          from: { backgroundPosition: '100% 100%' },
          to: { backgroundPosition: '0% 100%' },
        },
        'blob-opacity': {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        'float-up': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'css-scroll': 'css-scroll 30s linear infinite',
        'css-scroll-slow': 'css-scroll 50s linear infinite',
        'blob-1': 'blob-opacity 4s ease-in-out infinite',
        'blob-2': 'blob-opacity 6s ease-in-out infinite 1s',
        'blob-3': 'blob-opacity 5s ease-in-out infinite 2s',
        'float': 'float-up 6s ease-in-out infinite',
      },
      backgroundImage: {
        'grid-card-gradient': 'radial-gradient(50% 70.31% at 50% 0%, rgba(126, 61, 255, 0.04) 0%, rgba(126, 61, 255, 0) 100%)',
        'hero-radial': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.1), rgba(255, 255, 255, 0))',
      },
    },
  },
  plugins: [],
}
