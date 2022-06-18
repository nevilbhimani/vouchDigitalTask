import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: { main: "#023047" },
    error: { main: "#d32f2f" },
  },
  heading2: "#333333",
  heading1: "#000000",

  typography: {
    fontFamily: "Poppins",

    h3: {
      fontWeight: "700",
      fontSize: "30px!important",
      "@media (max-width:600px)": {
        fontSize: "25px!important",
      },
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "@media (max-width:600px)": {
            fontSize: "12px",
          },
        },
      },
    },
  },
});
