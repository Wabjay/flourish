/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // existing target inside src
    "./public/**/*.{html,js}", // new target in public
    "./*.{html,js}", // target files at the root level
    "./*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'crimson': ["Crimson Text", 'serif'],
        'inter': ['Inter','sans-serif'],
      },
      backgroundImage: {
        'light-left': "url('./src/asset/flower-light-left.png')",
        'light-right': "url('./src/asset/flower-light-right.png')",
        'dark-left': "url('./src/asset/flower-dark-left.png')",
        'dark-right': "url('./src/asset/flower-dark-right.png')",
        'light-left-right': "url('./src/asset/flower-light-left.png'), url('./src/asset/flower-light-right.png')",
        'dark-left-right': "url('./src/asset/flower-dark-left.png'), url('./src/asset/flower-dark-right.png')",
        'light-left-dark-right': "url('./src/asset/flower-light-left.png'), url('./src/asset/flower-dark-right.png')",
        'overlay': 'var(--Overlay-color, linear-gradient(180deg, rgba(1, 26, 39, 0.48) 4.69%, rgba(1, 26, 39, 0.45) 56.25%, rgba(1, 26, 39, 0.47) 100%))'
      },
      backgroundPosition: {
        'right-bottom-1': 'right bottom -40px',
        'leftTop-right': 'top left, right',
        'left-bottom-100': 'left bottom 100px',
        'left-bottom': 'left bottom',
        'right-bottom': 'right bottom',
        'left-rightBottom': 'left, right bottom'
      },
      backgroundSize: {
        'mobile': '220px',
        'tablet': '231px',
        'laptop': '267px',
        'desktop': '457px',
      },
      spacing: {
        '9': '36px',
        '25': "100px"
      }
    },
    colors: {
      "grey-0": "#F4F3FA",
      "grey-1": "#ECECF2",
      "grey-3": "#BDBCCC",
      "grey-6": "#3E3D4F",
      "grey-8": "#191820",
      "grey-9": "#09090C",
      "black": "#000",
      "white": "#FFFFfF",
      "gold-1": "#F8F3ED",
      "gold-5": "#BD9957",

    },
    fontSize: {
      "12": [
        "12px",
        {
          lineHeight: "16px",
        },
      ],
      "14": [
        "14px",
        {
          lineHeight: "18px",
        },
      ],
      "16": [
        "16px",
        {
          lineHeight: "22px",
        },
      ],
      "20": [
        "20px",
        {
          lineHeight: "32px",
          letterSpacing: "-0.4px",
        },
      ],
      "24": [
        "24px",
        {
          lineHeight: "36px",
          letterSpacing: "-0.48px",
        },
      ],
      "32": [
        "32px",
        {
          lineHeight: "39px",
          letterSpacing: "-1px",
        },
      ],
      "40": [
        "40px",
        {
          lineHeight: "48px",
          letterSpacing: "-1px",
        },
      ],
      "48": [
        "48px",
        {
          lineHeight: "57.6px",
          letterSpacing: "-1px",
        },
      ],
      "80": [
        "80px",
        {
          lineHeight: "82px",
          letterSpacing: "-2px",
        },
      ],
    },
    screens: {
      tablet: "576px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}