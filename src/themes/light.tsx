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
    error: {
      main: "#224c9d",
    },
  },
});

export default light;
