module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "dark-green": "#144645",
      "lite-green": "#91D63F",
      "sandel-clr": "#FBF7ED",
      "pale-green": "#59ACA7",
      "footer-black": "#263238",
      "gray-clr": "#A5A7A2",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        "hero-pattern": "url('/public/assets/images/hero-bg.svg')",
        "hero-why-us": "url('/public/assets/images/bg-home.svg')",
        "hero-line": "url('/public/assets/images/line2.svg')",
      },
      spacing: {
        "50px": "50px",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          "2xl": "1360px",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
