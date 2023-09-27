import { createStyles, makeStyles } from "@mui/styles";

export const homeStyles = makeStyles((theme) =>
  createStyles({
    section1: {
      minHeight: "calc(100vh - 64px)",
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
      height: "100",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: "700px",
    },
    heading1: {
      color: theme.palette.text.light,
      fontSize: "48px !important",
    },
    heading2: {
      color: theme.palette.text.heading,
      fontWeight: "bold",
      fontSize: "54px !important",
    },
    subheading: {
      maxWidth: "700px",
      color: theme.palette.text.light,
      marginBottom: "32px !important",
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
    subscribe: {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: `${theme.palette.text.dark} !important`,

      fontSize: "18px !important",
      padding: "10px 10px 10px 10xp !important",
      width: "200px !important",
      height: "50px !important",
      "&:hover": {
        backgroundColor: `${theme.palette.primary.dark} !important`,
      },
    },
    mediaBox: {
      display: "inline-flex",
      gap: "50px",
      marginTop: "64px",
    },
    iconMedia: {
      textAlign: "center !important",
      width: "50px !important",
      height: "50px !important",
    },
  })
);
