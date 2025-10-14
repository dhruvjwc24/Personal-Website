module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
  	fontFamily: {
  		default: [
  			'Inter',
  			'sans-serif'
  		],
  		display: [
  			'Playfair Display',
  			'sans-serif'
  		],
  		garamond: [
  			'Cormorant Garamond',
  			'serif'
  		],
  		serif: [
  			'Times New Roman'
  		],
  		playground: [
  			'PP Playground',
  			'sans-serif'
  		]
  	},
  	extend: {
  		colors: {
  			primary: {
          DEFAULT: "#222831",
          50: "#E7EAEE",
          100: "#CCD2DB",
          200: "#9CA8BA",
          300: "#687B97",
          400: "#455163",
          500: "#1B2027",
          600: "#15191E",
          700: "#0F1115",
          800: "#060709",
  			},
  			secondary: {
          DEFAULT: "#663EFF",
          50: "#EFEBFF",
          100: "#DED6FF",
          200: "#C2B3FF",
          300: "#A18AFF",
          400: "#8566FF",
          500: "#3300FF",
          600: "#2600BD",
          700: "#1A0080",
          800: "#0C003D",
  			},
  			neutral: {
  				DEFAULT: '#EEEEEE'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			'10xl': [
  				'8rem',
  				'1'
  			],
  			'11xl': [
  				'10rem',
  				'1'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '1rem'
  		},
  		screens: {
  			'2xl': '1440px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
