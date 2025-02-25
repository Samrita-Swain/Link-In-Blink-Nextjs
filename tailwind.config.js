/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./app/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
  //   // Or if using `src` directory:
  //   "./src/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary:["Poppins"]
      }
    },
  },
  plugins: [],
}