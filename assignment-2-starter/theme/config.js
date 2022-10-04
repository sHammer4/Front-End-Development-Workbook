import { createTheme, createMuiTheme } from '@mui/material'

const themeOptions = {
  palette: {
    primary: {
      main: '#004e8a',
    },
    secondary: {
      main: '#1e5c0a',
    },
  },
};

const theme = createTheme(themeOptions);
//const theme = createTheme({});

export { theme }