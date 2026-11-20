import { createTheme } from "@mui/material/styles";
import { common } from "@mui/material/colors";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f8f8ff",
      paper: common.white,
    },
    primary: {
      contrastText: "#d7b586",
      main: "#343434",
    },
    secondary: {
      contrastText: "#343434",
      main: "#d7b586",
    },
    text: {
      primary: "#343434",
      secondary: "#d7b586",
    },
  },

  typography,

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: "100%",
        },
        maxWidthLg: {
          "@media (min-width: 1200px)": {
            maxWidth: "1300px",
          },
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
        },
        body: {
          background: "#f4f6f8",
          height: "100%",
          minHeight: "100%",
        },
      },
    },
  },
});

export default theme;
