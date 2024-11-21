/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				robotoMono: ['Roboto Mono', 'monospace'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			maxWidth: {
				'25%': '25%',
				'50%': '50%',
				'60%': '60%',
				'70%': '70%',
				'75%': '75%',
				'80%': '80%',
				'85%': '85%',
			},
			colors: {
				'full-stack': 'hsl(var(--full-stack))',
				'front-end': 'hsl(var(--front-end))',
				'back-end': 'hsl(var(--back-end))',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			animation: {
				blob: 'blob 30s infinite',
				blob2: 'blob2 50s infinite',
				blob3: 'blob3 40s infinite',
				orbit: 'orbit calc(var(--duration)*1s) linear infinite',
				'fade-in': 'fadeIn 2s ease-in-out',
				'slide-from-left': 'slideFromLeft 1s ease-in-out',
				'slide-from-right': 'slideFromRight 1s ease-in-out',
				'slide-from-top': 'slideFromTop 1s ease-out',
				'slide-from-bottom': 'slideFromBottom 1s ease-in-out',
				'meteor-effect': 'meteor 5s linear infinite',
				marquee: 'marquee var(--duration) linear infinite',
				'marquee-vertical':
					'marquee-vertical var(--duration) linear infinite',
				glitch: 'glitch 5s infinite',
				pop: 'pop 0.7s cubic-bezier(0.27,0.53,0.28,1.30) forwards',
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
					'33%': {
						transform: 'translate(200px, 150px) scale(1.1)',
					},
					'66%': {
						transform: 'translate(60px, 100px) scale(0.9)',
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
				},
				blob2: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
					'45%': {
						transform: 'translate(-800px, -250px) scale(1.3)',
					},
					'75%': {
						transform: 'translate(-180px, -500px) scale(0.7)',
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
				},
				blob3: {
					'0%': {
						transform: 'translate(0px, 0px)',
					},
					'25%': {
						transform: 'translate(-500px, 120px)',
					},
					'45%': {
						transform: 'translate(-900px, 50px)',
					},
					'60%': {
						transform: 'translate(-700px, 20px)',
					},
					'75%': {
						transform: 'translate(-400px, 10px)',
					},
					'100%': {
						transform: 'translate(0px, 0px)',
					},
				},
				orbit: {
					'0%': {
						transform:
							'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)',
					},
					'100%': {
						transform:
							'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)',
					},
				},
				pop: {
					'0%': {
						transform: 'translateY(50px) scale(0)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0) scale(1)',
						opacity: '1',
					},
				},
				glitch: {
					'5%, 49%, 55%, 85%': {
						transform: 'skewX(0deg)',
					},
					'1%': {
						transform: 'skewX(20deg)',
					},
					'2%': {
						transform: 'skewX(-20deg)',
					},
					'3%': {
						transform: 'skewX(15deg)',
					},
					'4%': {
						transform: 'skewX(-15deg)',
					},
					'50%': {
						transform: 'skewX(20deg)',
					},
					'51%': {
						transform: 'skewX(-20deg)',
					},
					'53%': {
						transform: 'skewX(20deg)',
					},
					'87%': {
						transform: 'skewX(-40deg)',
					},
					'90%': {
						transform: 'skewX(40deg)',
					},
					'92%': {
						transform: 'skewX(-40deg)',
					},
					'94%': {
						transform: 'skewX(65deg)',
					},
					'95%': {
						transform: 'skewX(-65deg)',
					},
					'96%': {
						transform: 'skewX(65deg)',
					},
					'97%': {
						transform: 'skewX(-65deg)',
					},
					'98%': {
						transform: 'skewX(65deg)',
					},
					'100%': {
						transform: 'skewX(-65deg)',
					},
				},
				fadeIn: {
					'0%': {
						opacity: 0,
					},
					'100%': {
						opacity: 1,
					},
				},
				slideFromLeft: {
					'0%': {
						opacity: 0,
						transform: 'translateX(-100%)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateX(0)',
					},
				},
				slideFromRight: {
					'0%': {
						opacity: 0,
						transform: 'translateX(+100%)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateX(0)',
					},
				},
				slideFromTop: {
					'0%': {
						opacity: 0,
						transform: 'translateY(-100%)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateY(0)',
					},
				},
				slideFromBottom: {
					'0%': {
						opacity: 0,
						transform: 'translateY(+100%)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateY(0)',
					},
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' },
				},
				'marquee-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' },
				},
			},
		},
	},
	plugins: [import('tailwindcss-animate')],
};
