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
      dark: "#515151",
      light: "#FFFDFD",
      heading: "#F3DDDD",
    },
    background: {
      dark: "#434040",
      light: "#f5f5f5",
    },
  },
});

export default light;
