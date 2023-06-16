import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const twConfig: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },

      transitionTimingFunction: {
        DEFAULT: 'linear',
      },
    },
  },

  plugins: [],
};

export default twConfig;
