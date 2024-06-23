/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "index.html",
      "src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            background: "#1E1E1E",
            calc_bg: "#2D2D2D",
            primary: "#D8DEE9",
            border: "#343a40",
            btn: {
                func: "#6c757d",
                op: "#FFA500",
                primary: "#495057"
            },
            separator_focus: "#CCCCCC",
            separator_unfocus: "#7D7D7D",
        },
        fontFamily: {
            body: ["Nunito"],
            extra: ["Acme"],
        },
    },
  },
  plugins: [],
}

