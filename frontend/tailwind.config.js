/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        midnight: '#0b1021',
        accent: '#7dd3fc',
        accent2: '#a78bfa',
        glass: 'rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'gradient-glow': 'radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.25), transparent 30%), radial-gradient(circle at 80% 0%, rgba(14, 165, 233, 0.25), transparent 28%), radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.2), transparent 30%)',
      },
      boxShadow: {
        glass: '0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
        glow: '0 10px 50px rgba(124, 58, 237, 0.35)',
      },
      animation: {
        shimmer: 'shimmer 8s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        pulsefast: 'pulsefast 1.8s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulsefast: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.9 },
        },
      },
    },
  },
  plugins: [],
}
