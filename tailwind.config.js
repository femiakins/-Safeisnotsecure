/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neonBlue: '#00f0ff',
                neonCyan: '#00bcd4',
                darkBg: '#0f172a',
                cardBg: '#1e293b',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                neon: '0 0 15px rgba(0, 240, 255, 0.5)',
            },
        },
    },
    plugins: [],
}
