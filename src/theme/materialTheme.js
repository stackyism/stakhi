import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey, cyan, blueGrey } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: blueGrey[50],
      main: blueGrey[500], //'#556cd6'
      dark: blueGrey[800],
    },
    secondary: {
      //main: '#19857b',
      light: cyan[50],
      main: cyan[500],
      dark: cyan[800],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: grey[100],
    },
  },
});

export default theme;
