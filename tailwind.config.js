// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         montserrat: ['Montserrat', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e27daa',
        secondary: 'black',
      },
      boxShadow: {
        'custom': '1px 1px 20px 4px rgba(0, 0, 0, 0.75)',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },


        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-top': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },

        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(-5deg)' }
        },
      },
      animation: {
        typing: "typing 4s steps(20) infinite alternate, blink .7s infinite",
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-top': 'infinite-scroll-top 20s linear infinite',
        wave: 'wave 0.5s ease-in-out',
      },
      fontFamily: {
        halvetica: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        montserrat: ['Montserrat', 'sans-serif'],
        myfont: ['MyFont', 'sans-serif'],
        myfontbold: ['MyFontBold', 'sans-serif'],
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities(
          {
            '.text-shadow-sm': {
              textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
            },
            '.text-shadow': {
              textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
            },
            '.text-shadow-lg': {
              textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
            },
            '.text-shadow-xl': {
              textShadow: '6px 6px 6px rgba(0, 0, 0, 0.5)',
            },
          },
          ['responsive', 'hover', 'focus']
        );
      },
    ],
  }
}
