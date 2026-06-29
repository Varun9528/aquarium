export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: '#04192c',
        deepsea: '#041222',
        neon: '#39f0ff',
        glass: 'rgba(255,255,255,0.08)',
        coral: '#ff8fb8',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(12, 129, 208, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'ocean-gradient': 'radial-gradient(circle at top, rgba(57,240,255,0.18), transparent 35%), linear-gradient(180deg, rgba(6,35,59,0.95), #020b16 80%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
