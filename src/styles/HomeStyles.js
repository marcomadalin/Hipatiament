import { createStyles, makeStyles } from "@mui/styles";

export const homeStyles = makeStyles((theme) =>
  createStyles({
    section1: {
      height: "900px",
      display: "flex",
      backgroundColor: theme.palette.background.dark,
    },
    section2: {
      height: "900px",
    },
    heading1: {
      color: theme.palette.primary.main,
    },
    heading2: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
    subheading: {
      color: theme.palette.primary.main,
    },
  })
);
