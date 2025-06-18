/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#6366F1', // indigo-500
        secondary: '#38bdf8', // sky-400
        accent: '#a78bfa', // purple-400
        background: '#f8fafc', // slate-50
        card: '#f4f7fa', // very light blue
        column: '#e9f0fb', // soft blue
        border: '#e0e7ef', // lighter border
        muted: '#64748B', // slate-500
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(99, 102, 241, 0.08)',
        column: '0 2px 12px 0 rgba(100, 116, 139, 0.06)',
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 50%, #fbc2eb 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
