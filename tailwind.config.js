/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#020305',
        panel: '#080b10',
        line: 'rgba(255,255,255,0.12)',
        cyan: '#3ee7ff',
        mint: '#72f6b2',
        amber: '#ffcf6b'
      },
      boxShadow: {
        glow: '0 0 70px rgba(62, 231, 255, 0.2)',
        premium: '0 24px 80px rgba(0, 0, 0, 0.35)'
      }
    }
  },
  plugins: []
};
