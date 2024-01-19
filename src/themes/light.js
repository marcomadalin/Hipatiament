import { createTheme } from "@mui/material";

const light = createTheme({
  typography: {
    fontFamily: ["Cardo"].join(","),
  },
  palette: {
    primary: {
      main: "#FDE5E5",
      dark: "#AD9B9B",
      highlight: "#F0B1C8",
      highlight2: "#322F2F"
    },
    secondary: {
      main: "#434040",
    },
    text: {
      black: "#000000",
      dark: "#515151",
      light: "#FFFDFD",
      heading: "#F3DDDD",
    },
    background: {
      dark: "#434040",
      light: "#f5f5f5",
      pink: "#EDE6E6"
    },
  },
});

export default light;
