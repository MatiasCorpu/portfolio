/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir todas las extensiones relevantes
  ],
  "darkMode": "class",

  theme: {
    extend: {

      boxShadow: {
        'custom': ' -9px 9px 18px #cbd1d8, 9px -9px 18px #f9ffff',
        'custom-dark': '-8px 8px 16px #131315, 8px -8px 16px #1d1d21',
        'custom-dark-bold': '-5px 5px 10px #111113,5px -5px 10px #1f1f23',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },

      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },

      backgroundImage: {
        'custom-grid': `
          linear-gradient(0deg, transparent 24%, var(--color, #E1E1E1) 25%, var(--color, #E1E1E1) 26%, transparent 27%, transparent 74%, var(--color, #E1E1E1) 75%, var(--color, #E1E1E1) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, var(--color, #E1E1E1) 25%, var(--color, #E1E1E1) 26%, transparent 27%, transparent 74%, var(--color, #E1E1E1) 75%, var(--color, #E1E1E1) 76%, transparent 77%, transparent)
        `,
      },
      backgroundSize: {
        'custom-grid': '55px 55px',
      },

    },
  },

  plugins: [],
}

