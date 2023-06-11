/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ], 
  theme: {
    extend: {
      fontFamily: {
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
      },
      backgroundImage:{
        'logo': "url(/src/data/logo-dark.png)",
        'content': "url(/src/data/background-content-pattern.png)",
        'placeholder': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/src/data/background-dragdrop.png)"
      },
      colors:{
        primary: {
          100: "#d0d0d0",
          200: "#a0a0a0",
          300: "#717171",
          400: "#414141",
          500: "#121212",
          600: "#0e0e0e",
          700: "#0b0b0b",
          800: "#070707",
          900: "#040404"
        },
        secondary: {
          100: "#d3d4d6",
          200: "#a7a9ad",
          300: "#7a7e83",
          400: "#4e535a",
          500: "#222831",
          600: "#1b2027",
          700: "#14181d",
          800: "#0e1014",
          900: "#07080a"
        },

        teal: {
          100: "#cdf4e7",
          200: "#9ae9cf",
          300: "#68dfb8",
          400: "#35d4a0",
          500: "#03c988",
          600: "#02a16d",
          700: "#027952",
          800: "#015036",
          900: "#01281b"
        },

        button: "#393E46",
        live: "#DB4045"
      },
      boxShadow:{
        'streamPreviewHover': 'inset -6px -83px 67px -35px rgba(0,0,0,0.33)' 
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('tailwind-scrollbar') ({ nocompatible: true }),
  ],
}
