import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 16,
    button: {
      textTransform: "none",
      letterSpacing: 1,
      fontWeight: "regular"
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "regular"
      }
    }
  },
  loginNavigation: {
    navigationBar: {
     margin: '0'
    },
    text: {
      fontSize: 15
    }
  },
  loginSidebar: {
    text: {
      fontSize: '1.5rem',
      color: 'white',
      letterSpacing: 1,
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" },
    gradient: { main: "#86B9FF" }

    
  }
});
