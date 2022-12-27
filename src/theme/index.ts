import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    caption: {
      fontSize: "16px",
    },
    h2: {
      fontSize: "32px",
      fontWeight: "400",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          padding: "0px",
          fontSize: "14px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          border: "1px solid steelblue",
          color: "steelblue",
          ":hover": {
            backgroundColor: "steelblue",
            color: "white",
          },
        },
      },
    },
  },
});
