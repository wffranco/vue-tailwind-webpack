module.exports = {
  purge: {
    enabled: process.env.APP_MODE !== 'dev',
    content: [
      './public/**/*.html',
      './src/**/*.jsx',
      './src/**/*.tsx',
      './src/**/*.vue',
      './src/components/**/*.js',
      './src/components/**/*.ts',
      './src/views/**/*.js',
      './src/views/**/*.ts',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      cursor: {
        inherit: 'inherit',
      },
      fill: {
        none: 'none',
      },
      gridTemplateColumns: {
        'a:1': 'auto 1fr',
        '1:a': '1fr auto',
      },
      minWidth: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '1/4': '25%',
      },
      screens: {
        '3xl': '1792px',
        '4k': '2048px',
      },
      spacing: {
        100: '25rem',
        120: '30rem',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
