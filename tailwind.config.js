/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 hsl(var(--shadow-color) / 0.15)', // Small shadow with opacity 3
      DEFAULT:
        '0 1px 3px 0 hsl(var(--shadow-color) / 0.15), 0 1px 2px -1px hsl(var(--shadow-color) / 0.15)',
      md: '0 4px 6px -1px hsl(var(--shadow-color) / 0.15), 0 2px 4px -2px hsl(var(--shadow-color) / 0.15)',
      lg: '0 10px 15px -3px hsl(var(--shadow-color) / 0.15), 0 4px 6px -4px hsl(var(--shadow-color) / 0.15)',
      xl: '0 20px 25px -5px hsl(var(--shadow-color) / 0.15), 0 8px 10px -6px hsl(var(--shadow-color) / 0.15)',
      '2xl': '0 25px 50px -12px hsl(var(--shadow-color) / 0.15)',
      inner: 'inset 0 2px 4px 0 hsl(var(--shadow-color) / 0.15)',
      none: '0 0 #0000',
    },
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      transparent: '#00000000',
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
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
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      chart: {
        1: 'hsl(var(--chart-1))',
        2: 'hsl(var(--chart-2))',
        3: 'hsl(var(--chart-3))',
        4: 'hsl(var(--chart-4))',
        5: 'hsl(var(--chart-5))',
      },
    },
    extend: {
      animation: {
        ripple: 'ripple 600ms linear',
      },
      keyframes: {
        ripple: {
          to: {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
