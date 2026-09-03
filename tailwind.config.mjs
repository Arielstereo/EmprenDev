/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				surface: {
					base: 'var(--surface-base)',
					1: 'var(--surface-1)',
					2: 'var(--surface-2)',
					3: 'var(--surface-3)',
				},
				border: {
					subtle: 'var(--border-subtle)',
					default: 'var(--border-default)',
					emphasis: 'var(--border-emphasis)',
					accent: 'var(--border-accent)',
				},
				txt: {
					primary: 'var(--text-primary)',
					secondary: 'var(--text-secondary)',
					muted: 'var(--text-muted)',
				},
				accent: {
					DEFAULT: 'var(--accent)',
					hover: 'var(--accent-hover)',
					dark: 'var(--accent-dark)',
					subtle: 'var(--accent-subtle)',
				},
			},
			borderRadius: {
				'control': '10px',
				'card': '16px',
				'container': '20px',
			},
			boxShadow: {
				'glow': '0 0 20px -5px var(--accent-subtle)',
				'card': 'var(--shadow-card)',
				'card-hover': 'var(--shadow-card-hover)',
			},
			transitionTimingFunction: {
				'out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
			},
		},
	},
	plugins: [addDynamicIconSelectors()],
}
