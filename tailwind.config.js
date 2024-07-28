/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#e29e15',
				'primary-light': '#dea80d',
				secondary: 'rgba(60, 52, 11, 0.35)',
				'light-grey': '	#FCF5E5',
			},
			boxShadow: {
				'3xl': '0px 0px 10px rgba(0, 0, 0, 0.5)',
			},
		},
	},
	plugins: [],
};
