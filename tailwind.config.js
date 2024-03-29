module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: true, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Quicksand", "sans-serif"],
      body: ["Quicksand", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'blue': '#2D3192',
      'blue_dark': '#1B1464',
      'disable': '#aeaeae',
      'black': '#000000',
      'orange': '#F15A25',
      'red': '#AC2333',
      'green': '#2C9942',
      'gray_light': "#F7F7F7",
    },
    extend: {
      
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "slide-out": {
          "0%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
          "100%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
        },
        "rotate": {
          "0%": {
            "-webkit-transform": "rotate(0deg)",
            transform: "rotate(0deg)",
          },
          "100%": {
            "-webkit-transform": "rotate(360deg)",
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-out": "slide-out 0.5s ease-in",
        "rotate": "rotate 1s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};