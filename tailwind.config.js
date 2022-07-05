module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        lemonade: {
          ...require("daisyui/src/colors/themes")["[data-theme=lemonade]"],
          primary: "#85AA44",
          secondary: "#BCCF85",
          error: "#F04141",
          warning: "#FFCE00",
          success: "#10DC60",
          info: "#A49F9E",
          neutral: "#343533",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
