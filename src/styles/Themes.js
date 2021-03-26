import { extendTheme } from '@chakra-ui/react';

export const day = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway'
  },
  colors: {
    portfolio: {
      background: '#F1F1F1',
      forground: '#FFFFFF',
      unselected: '#E0E0E0',
      highlighted: '#709DFF',
      text: '#2B2D35'
    },
    footer: {
      forground: '#2B2D35',
      text: '#FFFFFF'
    }
  },
  space: {
    portfolio:{
      wide: '2.5em',
      standard: '1.5em',
      thin: '.75em',
      hair: '0.15em'
    }
  },
  borderWidths: {
    portfolio:{
      hair: '0.15em'
    }
  }
});

export const night = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway'
  },
  colors: {
    portfolio: {
      background: '#1C1F27',
      forground: '#2B2D35',
      unselected: '#35363D',
      highlighted: '#709DFF',
      text: '#FFFFFF'
    },
    footer: {
      forground: '#2B2D35',
      text: '#FFFFFF'
    }
  },
  space: {
    portfolio:{
      wide: '2.5em',
      standard: '1.5em',
      thin: '.75em',
      hair: '0.15em'
    }
  },
  borderWidths: {
    portfolio:{
      hair: '0.15em'
    }
  }
});
