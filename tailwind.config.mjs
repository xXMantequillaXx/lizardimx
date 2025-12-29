/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Backgrounds
				'rich-black': '#0A0A0A',
				'tactical-navy': '#0D1B2A',
				'gunmetal': '#1C2833',
				'steel-gray': '#2C3E50',

				// Text
				'signal-white': '#F5F5F5',
				'intel-gray': '#8B9DC3',
				'muted-steel': '#5D6D7E',

				// Accents
				'electric-cyan': '#00D9FF',
				'alert-red': '#E63946',
				'operational-green': '#39FF14',
				'intel-gold': '#D4AF37',
				'command-purple': '#7B2CBF',

				// Logo (restricted usage)
				'gecko-green': '#00400D',
				'lockheed-blue': '#003366',
			},
			fontFamily: {
				display: ['Space Grotesk', 'system-ui', 'sans-serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono Variable', 'monospace'],
			},
		},
	},
	plugins: [],
};
