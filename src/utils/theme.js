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
    h2: {
      fontWeight: "700",
      fontSize: "39px",
    },
    h3: {
      fontWeight: "700",
      fontSize: "30px!important",
      "@media (max-width:600px)": {
        fontSize: "25px!important",
      },
    },
    h6: {
      fontWeight: "500",
      fontSize: "10px",
    },
    textField: {
      height: "50px!important",
    },
  },
});
