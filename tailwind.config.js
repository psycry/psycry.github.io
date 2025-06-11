/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                // You can add the specific palette colors here if needed
                // for easier access, e.g. 'brand-purple': '#BE63F9'
            }
        },
    },
    plugins: [],
}
