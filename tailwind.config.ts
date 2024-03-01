import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      boxShadow: {
        custom_shadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
      },
      backgroundImage: {
        'my_bg_image' : "url('../public/img.jpeg')",
        'earth' : "url('../public/Layer.png')",
        'hover' : "url('../public/img1.png')",
        'hover2' : "url('../public/img-5.png')",
      },
     
      colors:{
        primary:'#FF6522',
        text_white:"#FAFAFA",
        text_color:'#969696',
        text_primary:'#666666',
        text_secondary:"#AAAAAA",
        star_color:"#FFD600",
        text_light_black:'#0F2137',
        // text_black:"#2E2E2E"
      }
    },
  },
  plugins: [],
};
export default config;
