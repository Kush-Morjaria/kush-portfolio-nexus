import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

// Every value below points at a CSS variable in src/index.css — that file is the design system.
const color = (token: string) => `hsl(var(--${token}) / <alpha-value>)`;

export default {
	darkMode: "media",
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
			padding: { DEFAULT: '1.25rem', sm: '2rem' },
			screens: {
				'2xl': '1200px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-body)'],
				display: ['var(--font-display)'],
				mono: ['var(--font-mono)'],
			},
			fontSize: {
				'display-xl': ['var(--text-display-xl)', { lineHeight: '1', letterSpacing: '-0.025em' }],
				'display-lg': ['var(--text-display-lg)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
				'display-md': ['var(--text-display-md)', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
				title: ['var(--text-title)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
				lead: ['var(--text-lead)', { lineHeight: '1.5' }],
				body: ['var(--text-body)', { lineHeight: '1.65' }],
				small: ['var(--text-small)', { lineHeight: '1.55' }],
				label: ['var(--text-label)', { lineHeight: '1.2', letterSpacing: '0.14em' }],
			},
			spacing: {
				'2xs': 'var(--space-2xs)',
				xs: 'var(--space-xs)',
				sm: 'var(--space-sm)',
				md: 'var(--space-md)',
				lg: 'var(--space-lg)',
				xl: 'var(--space-xl)',
				'2xl': 'var(--space-2xl)',
				section: 'var(--space-section)',
				rail: 'var(--rail-width)',
				header: 'var(--header-height)',
			},
			borderWidth: {
				hair: 'var(--rule-hair)',
				heavy: 'var(--rule-heavy)',
			},
			transitionDuration: {
				fast: 'var(--dur-fast)',
				base: 'var(--dur-base)',
				slow: 'var(--dur-slow)',
			},
			transitionTimingFunction: {
				'out-expo': 'var(--ease-out)',
			},
			colors: {
				// Palette names, for new code.
				ink: color('ink'),
				quiet: color('quiet'),
				paper: { DEFAULT: color('paper'), raised: color('paper-raised') },
				rule: color('rule'),
				amber: { DEFAULT: color('amber'), soft: color('amber-soft') },
				// shadcn/ui names, mapped onto the same palette.
				border: color('border'),
				input: color('input'),
				ring: color('ring'),
				background: color('background'),
				foreground: color('foreground'),
				primary: { DEFAULT: color('primary'), foreground: color('primary-foreground'), hover: color('primary-hover') },
				secondary: { DEFAULT: color('secondary'), foreground: color('secondary-foreground'), hover: color('secondary-hover') },
				destructive: { DEFAULT: color('destructive'), foreground: color('destructive-foreground') },
				success: { DEFAULT: color('success'), foreground: color('success-foreground') },
				muted: { DEFAULT: color('muted'), foreground: color('muted-foreground') },
				accent: { DEFAULT: color('accent'), foreground: color('accent-foreground') },
				popover: { DEFAULT: color('popover'), foreground: color('popover-foreground') },
				card: { DEFAULT: color('card'), foreground: color('card-foreground') },
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'var(--radius)',
				sm: 'var(--radius)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [animate],
} satisfies Config;
