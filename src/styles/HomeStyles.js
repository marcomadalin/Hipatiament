import { createStyles, makeStyles } from "@mui/styles";

export const homeStyles = makeStyles((theme) =>
  createStyles({
    section1: {
      height: "calc(100vh - 64px)",
      display: "flex",
      backgroundColor: theme.palette.background.dark,
      padding: "40px 60px 40px 60px",
      justifyContent: "space-between",
    },
    section2: {
      minHeight: "calc(100vh - 64px)",
      backgroundColor: theme.palette.background.light,
    },
    headingsBox: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: "700px",
    },
    heading1: {
      color: theme.palette.text.defaultLight,
    },
    heading2: {
      color: theme.palette.text.heading,
      fontWeight: "bold",
    },
    subheading: {
      maxWidth: "700px",
      color: theme.palette.text.defaultLight,
    },
    mainImageBox: {
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
    mainImage: {
      width: "500px",
      height: "750px",
    },
  })
);
