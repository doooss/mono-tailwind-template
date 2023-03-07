module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Open Sans',
        'Noto Sans KR',
        'Noto Sans',
        'Apple SD Gothic Neo',
        '나눔고딕',
        'Nanum Gothic',
        'Malgun Gothic',
        '맑은 고딕',
        'sans-serif',
      ],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
