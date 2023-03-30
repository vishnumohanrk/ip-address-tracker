import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const twConfig = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-rubik)', ...fontFamily.sans],
      },

      colors: {
        gray: '#2C2C2C',
      },

      boxShadow: {
        card: '0px 50px 50px -25px rgba(0, 0, 0, 0.0983665);',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default twConfig;
