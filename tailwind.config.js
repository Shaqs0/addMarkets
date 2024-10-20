/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}', 
	],
	theme: {
		colors: {
			'primary-blue': '#47A7E3',
			'primary-light-blue': '#83BCDC',
			'dark-blue': '#316594',
			'text-color': '#585858',
			'selected-text': '#F68738',
		},
		screens: {
			'max-lg': {'max': '1124px'},
			'max-md': {'max': '930px'},
			'min-md': {'min': '930px'}
		},
		extend: {
			backgroundColor: {
				'orange-gradient': 'linear-gradient(180deg, #FFA96B -21.43%, #EE7A28 100%)',
				'main-gradient': 'linear-gradient(180deg, rgba(172, 216, 239, 0.50) -2.24%, rgba(245, 250, 255, 0.00) 78.75%)',
			},
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
