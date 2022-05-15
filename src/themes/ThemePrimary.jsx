import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const borderRadius = 8;

const ThemePrimary = createTheme({
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#f97f11",
      dark: "#f19809",
      contrastText: "#000"
    },
    secondary: {
      light: "#FFFFFF",
      main: "#ff892e",
      dark: "#ff892e",
      contrastText: "#000"
    },
    error: {
      light: red.A400,
      main: red.A400,
      dark: red.A400,
      contrastText: "#FFF"
    },
    background: {
      default: "#e9e9e9"
    }
  },
  typography: {
    fontFamily: [
      '"Raleway"',
      '"Josefin Sans"',
      '"Poppins"',
      '"Montserrat"',
      '"Bebas Neue"',
      '"Titillium Web"',
      '"Gemunu Libre"',
      '"Teko"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Roboto"',
      '"Oxygen"',
      '"Ubuntu"',
      '"Cantarell"',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      '"Arial"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    fontSize: 14
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
          fontWeight: 800,
          fontSize: "1.2rem"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
          borderWidth: 2
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 800
        }
      }
    }
  }
});

export default ThemePrimary;
