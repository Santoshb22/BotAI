import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    h1: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: '36.77px',
      fontFamily: 'Ubuntu, sans-serif',
    },
    h2: {
      fontSize: '28px',
      fontWeight: 500,
      lineHeight: '32.17px',
    },
    h3: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '27.58px',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '21.79px',
    },
  },
  palette: {
    primary: {
      dark: '#9785BA',
      main: '#dbcdf0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#D7C7F4',
      main: '#ffffff',
      contrastText: '#3C3C3C',
    },
  },
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          border: '1px solid #ffffff',
          borderRadius: '4px',
          boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.25)',
        },
      },
    },
  },
});