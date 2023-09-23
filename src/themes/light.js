import { createTheme } from "@mui/material";

const light = createTheme({
  typography: {
    fontFamily: ["Cardo"].join(","),
  },
  palette: {
    primary: {
      main: "#FDE5E5",
    },
    secondary: {
      main: "#434040",
    },
    text: {
      heading1: "#FFFDFD",
      heading2: "#F3DDDD",
    },
    background: {
      dark: "#434040",
      light: "#eeeeee",
    },
  },
});

export default light;
