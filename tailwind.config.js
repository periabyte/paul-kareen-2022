/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'motif-pink-1': '#f2abaf',
				'motif-pink-2': '#f7d5c9',
				'motif-pink-3': '#f9ccc7',
				'motif-green-1': '#aabfb8',
				'motif-green-2': '#b5c6b4',
				'motif-green-3': '#b2c1a2',
			},
			screens: {
				xs: '320px',
			},
		},
	},
	plugins: [],
};
