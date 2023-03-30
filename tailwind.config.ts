import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const twConfig = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-rubik)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default twConfig;
