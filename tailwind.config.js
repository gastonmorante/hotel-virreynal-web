/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C05C3E',     // Terracota
        secondary: '#3D2B1F',   // Café Espresso
        background: '#F9F6F0',  // Blanco Hueso
        charcoal: '#2B2B2B',    // Texto oscuro
        accent: '#5F7055',      // Verde Oliva
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
