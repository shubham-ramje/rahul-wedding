/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          maroon: "#4A0404",
          burgundy: "#2B0303",
          darkred: "#1A0101",
          cream: "#FFFDF7",
          ivory: "#FDF8ED",
          cardbg: "rgba(74, 4, 4, 0.75)",
          creamcard: "rgba(255, 253, 247, 0.95)",
        },
        gold: {
          light: "#FDF3C7",
          champagne: "#F3E5AB",
          DEFAULT: "#D4AF37",
          antique: "#C59B27",
          dark: "#997300",
          glow: "rgba(212, 175, 55, 0.4)",
        }
      },
      fontFamily: {
        rozha: ["'Rozha One'", "serif"],
        yatra: ["'Yatra One'", "cursive"],
        devanagari: ["'Noto Sans Devanagari'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
        cinzel: ["'Cinzel'", "serif"],
        greatvibes: ["'Great Vibes'", "cursive"],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA820A 100%)',
        'royal-gradient': 'linear-gradient(180deg, #2B0303 0%, #4A0404 50%, #2B0303 100%)',
        'ivory-gradient': 'linear-gradient(180deg, #FFFDF7 0%, #FBF6E9 100%)',
      },
      boxShadow: {
        'royal-gold': '0 0 25px rgba(212, 175, 55, 0.25)',
        'royal-gold-lg': '0 0 45px rgba(212, 175, 55, 0.4)',
        'royal-card': '0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(212, 175, 55, 0.15)',
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-reverse': 'spin-reverse 45s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 20px rgba(243, 229, 171, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
