/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#e29e15',
				secondary: 'rgba(60, 52, 11, 0.35)',
			},
		},
	},
	plugins: [],
};
