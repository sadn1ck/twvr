/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "media",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "rgb(var(--bg))",
				content: "rgb(var(--text))",
			},
		},
	},
	plugins: [],
};
