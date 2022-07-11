import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    cssVarPrefix: 'chakra',
  },
  extend = {
    breakpoints: {
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
      // Extras
      d_6xl: '72em',
    },
    colors: {
      brand: {
        50: '#f0f2fd',
        100: '#a6b0f1',
        200: '#97a3ee',
        300: '#8995ec',
        400: '#7a88e9',
        500: '#6B7BE7',
        600: '#606fd0',
        700: '#5662b9',
        800: '#4b56a2',
        900: '#404a8b',
      },
    },
  };

const theme = extendTheme({ config, ...extend });
export default theme;
