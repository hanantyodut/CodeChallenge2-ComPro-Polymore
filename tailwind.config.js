/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				head: ["Unica One"],
				content: ["Raleway"],
				body: ["Didact Gothic"],
			},
		},
		screens: {
			mobile: "320px",
			tablet: "600px",
			tablet1: "768px",
			laptop: "1024px",
			desktop: "1280px",
			tv: "1536px",

			tabletMax: { max: "600px" },
		},
	},
	plugins: [],
};
