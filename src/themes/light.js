import { createTheme } from "@mui/material";

const light = createTheme({
  typography: {
    fontFamily: ["Cardo"].join(","),
  },
  palette: {
    primary: {
      main: "#FDE5E5",
      dark: "#AD9B9B",
    },
    secondary: {
      main: "#434040",
    },
    text: {
      defaultLight: "#FFFDFD",
      heading: "#F3DDDD",
    },
    background: {
      dark: "#434040",
      light: "#FFFDFD",
    },
  },
});

export default light;
