/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        investPrimary: '#B8935A', // Muted gold/tan for buttons
        investPrimaryLight: '#C9A86A', // Lighter gold
        investBg: '#F7F1E3', // Warm cream
        investSidebar: '#EFE6D3', // Darker cream
        investText: '#2B211C', // Dark brown/near-black
        investSecondary: '#10b981', // Keeping emerald for checkmarks/success
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
