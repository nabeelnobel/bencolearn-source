/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredokaone : ["FredokaOne", "cursive"],
        bevietnam: ["BeVietnam", "cursive"],
        bevietnamsemibold:["BeVietnamSemiBold"],
        bevietnambold:["BeVietnamBold"],
        bevietnamextrabold : ["BeVietnamExtraBold"],
        poppins:["poppins"],
        poppinsSemiBold:["poppinsSemiBold"],
        poppinsBold:["poppinsBold"],
        poppinsLight : ["poppinsLight"],
        poppinsThin : ["poppinsThin"],
        rejang : ["rejang"],
      },
      colors:{
        mainblue : "#6360FF",
        purpbg : "#201937",
        secbg : "#080038",
      }
    },
     screens: {
      'xs':'328px',
      
      'sm': '360px',

      'md': '440px',

      'lg': '523px',

      'xl': '605px',
    }
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
                  
         "primary": "#E90064",
                  
         "secondary": "#6F1AB6",
                  
         "accent": "#301E67",
                  
         "neutral": "#FFFFFF",
                  
         "base-100": "#201937",
                  
         "info": "#4072CE",
                  
         "success": "#39B5E0",
                  
         "warning": "#E9980C",
                  
         "error": "#D61C4E",
        },
      },
    ],
  },
}