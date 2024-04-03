import { ThemeOptions } from '@mui/material';

export const themeOptions: ThemeOptions = {

  palette: {
    common: {
      black: '#000',
      white: '#FFF',
    },
    primary: {
      main: '#0074ff',
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: '#f2fa0e',
      contrastText: "#0074ff",
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#FF9E1B',
    },
    success: {
      main: '#5AB52F',
    },
    text: {
      primary: '#212121',
      secondary: '#424242',
      disabled: '#9E9E9E',
    },
  },
  typography: {
    //fontFamily: ['Montserrat'].join(','),
  },
};
