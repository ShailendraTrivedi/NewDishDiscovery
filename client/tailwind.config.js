/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      desktop: "1440px",
    },
    extend: {
      backgroundImage: {
        home_img: "url('/home_img.jpg')",
        auth_img: "url('/auth_img.jpg')",
      },
      colors: {
        red: "#ff0000",
        black50: "rgba(0, 0, 0, 0.5)",
        black10: "rgba(0, 0, 0, 0.1)",
        black5: "rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {},
      fontSize: {
        h1: "67px",
        h2: "50px",
        h3: "37px",
        h4: "28px",
        h5: "21px",
        h6: "13px",
        p: "16px",
        s: "10px",
      },
    },
  },
  plugins: [],
};
