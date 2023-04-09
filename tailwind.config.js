module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        fontFamily: {
            catamaran: ["Catamaran", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        extend: {
            container: {
                padding: "1rem",
                center: true,
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
