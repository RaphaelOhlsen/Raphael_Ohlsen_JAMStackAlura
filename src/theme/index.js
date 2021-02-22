import typographyVariants from './typographyVariants';
import breakpoints from './breakpoints';

const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    dark: {
      color: '##0a192f',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#64FFDA',
      contrastText: '#FFFFFF',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#FFFFFF',
    },
  },
  tertiary: {
    main: {
      color: '#CCD6F6',
      contrastText: '#FFFFFF',
    },
    dark: {
      color: '#8892B0',
    },
    light: {
      color: '#88989E',
      contrastText: '#FFFFFF',
    },
  },
  modes: {
    dark: {},
  },
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '8px',
  fontFamily: "'Rubik', sans-serif",
  transition: 'all 300ms ease-in-out',
};
