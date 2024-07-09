//** this function generated the transformation keyframes necessary
// for a bezier curve dragIn animation */
//*/
const generateRandomDragInMovement = (): Record<
	string,
	{ transform: string }
> => {
	// keyframe 0 is the start and I want it to be 100% x away
	// keyframe 1 is the first keyframe and the image should be 100 - 1^2.5
	// keyframe 2
	const keyframes = {}

	for (let i = 0; i <= 8; i++) {
		const translatePercentage = 100 - (i ^ 2.5)

		if (!(translatePercentage < 0)) {
			keyframes[`${i}%`] = {
				transform: `translateX(${translatePercentage}%) translateY(-${translatePercentage}%)`,
			}
		}
	}

	return keyframes
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				blink: {
					"0%, 100%": { opacity: "0" },
					"50%": { opacity: "1" },
				},
				dragIn: {
					...generateRandomDragInMovement(),
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				blink: "blink 1.2s infinite",
				dragIn: "dragIn 1s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}
