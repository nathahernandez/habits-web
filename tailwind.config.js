/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				BlackCustomColor: "#1E1E1E"
			},
			gridTemplateRows: {
				7: "repeat(7, minmax(0, 1fr))"
			}
		},
	},
	plugins: [],
}
