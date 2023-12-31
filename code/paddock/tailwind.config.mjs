/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'shadow': {
					DEFAULT: '#1c1c1c',
					'50': '#f6f6f6',
					'100': '#e7e7e7',
					'200': '#d1d1d1',
					'300': '#b0b0b0',
					'400': '#888888',
					'500': '#6d6d6d',
					'600': '#5d5d5d',
					'700': '#4f4f4f',
					'800': '#454545',
					'900': '#3d3d3d',
					'950': '#1c1c1c',
				},
				'indigo': {
					DEFAULT: '#0f486b',
					'50': '#f0f9ff',
					'100': '#e1f2fd',
					'200': '#bce4fb',
					'300': '#81d0f8',
					'400': '#3eb9f2',
					'500': '#159fe2',
					'600': '#0880c1',
					'700': '#08669c',
					'800': '#0b5681',
					'900': '#0f486b',
					'950': '#0a2e47',
				},
				'violet': {
					DEFAULT: '#731dd8',
					'50': '#f6f2ff',
					'100': '#eee8ff',
					'200': '#dfd4ff',
					'300': '#c7b2ff',
					'400': '#ac86ff',
					'500': '#9455fd',
					'600': '#8832f5',
					'700': '#731dd8',
					'800': '#641abd',
					'900': '#54189a',
					'950': '#340c69',
				},
				'sky': {
					DEFAULT: '#63adf2',
					'50': '#f0f7fe',
					'100': '#ddecfc',
					'200': '#c2dffb',
					'300': '#98ccf8',
					'400': '#63adf2',
					'500': '#4490ed',
					'600': '#2f73e1',
					'700': '#265ecf',
					'800': '#254da8',
					'900': '#234485',
					'950': '#1a2b51',
				},
				'rust': {
					DEFAULT: '#d05353',
					'50': '#fcf4f4',
					'100': '#f9e7e7',
					'200': '#f6d2d2',
					'300': '#eeb3b3',
					'400': '#e28787',
					'500': '#d05353',
					'600': '#bf4343',
					'700': '#a03535',
					'800': '#852f2f',
					'900': '#6f2d2d',
					'950': '#3b1414',
				},
				'salmon': {
					DEFAULT: '#fe938c',
					'50': '#fef3f2',
					'100': '#ffe3e1',
					'200': '#ffccc9',
					'300': '#fe938c',
					'400': '#fb776e',
					'500': '#f34b40',
					'600': '#e12d21',
					'700': '#bd2218',
					'800': '#9c2018',
					'900': '#81211b',
					'950': '#460d09',
				},
				'mint': {
					DEFAULT: '#eff9f0',
					'50': '#eff9f0',
					'100': '#e2f6e5',
					'200': '#c7ebcd',
					'300': '#9bdaa5',
					'400': '#68c076',
					'500': '#43a453',
					'600': '#338641',
					'700': '#2b6a35',
					'800': '#26552e',
					'900': '#214628',
					'950': '#0d2612',
				},
			}
		},
	},
	plugins: [],
}
