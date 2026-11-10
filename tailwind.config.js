/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: { void: '#080b12', panel: '#111722', electric: '#a6ffcb', violet: '#9b8cff' },
    fontFamily: { sans: ['Manrope', 'sans-serif'], mono: ['DM Mono', 'monospace'] }
  }},
  plugins: []
}