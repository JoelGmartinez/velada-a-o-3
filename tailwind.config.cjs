/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			boxing: ['"Boxing"', 'sans-serif'],
			striped: ['"Striped"', 'sans-serif'],
		},
		extend: {

		}
	},
	plugins: [
    require('tailwindcss-animated')
  ],
}




