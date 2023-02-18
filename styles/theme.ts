import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          '& ::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
          },
          '& ::-webkit-scrollbar-track': {
            boxShadow: `inset 0 0 5px #fff`,
            borderRadius: '10px',
          },
          '& ::-webkit-scrollbar-thumb': {
            backgroundColor: '#C4C8CC',
            borderRadius: '10px',
          },
          '& ::-webkit-scrollbar-thumb:hover': {},
        },
        body: {
          background: '#000',
        },
      },
    },
  },
  typography: {
    fontSize: 11,
    fontFamily: 'var(--Poppins)',
    fontWeightRegular: 'normal',
    h1: {
      fontSize: 48,
      lineHeight: 1.4,
      fontWeight: 700,
    },
    h2: {
      fontSize: 40,
      lineHeight: 1.4,
      fontWeight: 700,
    },
    h3: {
      fontSize: 36,
      lineHeight: 1.4,
      fontWeight: 700,
    },
    h4: {
      fontSize: 32,
      lineHeight: 1.4,
      fontWeight: 400,
    },
    h5: {
      fontSize: 28,
      lineHeight: 1.4,
      fontWeight: 400,
    },
    h6: {
      fontSize: 24,
      lineHeight: 1.4,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: 1.4,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 16,
      lineHeight: 1.4,
      fontWeight: 400,
    },
    body1: {
      fontSize: 14,
      lineHeight: 1.4,
      fontWeight: 400,
    },
    body2: {
      fontSize: 12,
      lineHeight: 1.4,
      fontWeight: 400,
    },
    caption: {
      fontSize: 10,
    },
  },
  palette: {
    primary: { main: '#000' },
    secondary: { main: '#fff' },
    yellow: { light: '#FFBF0D', main: '#FF9809' },
    orange: { light: '#FF7004', main: '#FF4900' },
    gray: { main: '#8C8CA5', dark: '#707070' },
    text: { primary: '#fff', secondary: '#000' },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    yellow: Palette['primary']
    gray: Palette['primary']
    orange: Palette['primary']
  }

  interface PaletteOptions {
    yellow?: PaletteOptions['primary']
    gray?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
  }
}

export default theme
