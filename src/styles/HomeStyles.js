import { createStyles, makeStyles } from "@mui/styles";

export const homeStyles = makeStyles((theme) =>
  createStyles({
    section1: {
      minHeight: "calc(100vh - 64px)",
      display: "flex",
      backgroundColor: theme.palette.background.dark,
      padding: "40px 60px 40px 60px",
    },
    section2: {
      boxSizing: "border-box",
      display: "flex",
      alignSelf: "center",
      minHeight: "calc(100vh - 64px)",
      backgroundColor: theme.palette.background.light,
      padding: "0px 60px 0px 60px",
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
      height: "100",
      display: "flex",
      alignItems: "center",
    },
    mainImage: {
      width: "500px",
      height: "750px",
    },
    mainImageSmall: {
      width: "200px",
      height: "450px",
    },
    subscribe: {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: `${theme.palette.text.dark} !important`,
      fontSize: "18px !important",
      padding: "10px 10px 10px 10xp !important",
      width: "200px !important",
      height: "50px !important",
      borderRadius: "0px !important",
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
    slide: {
      minHeight: "100%",
    },
    articleBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
    },
    articleImage: {
      height: "70%",
      width: "100%",
      objectFit: "cover",
      "&:hover": {
        cursor: "pointer",
      },
    },
    articleHeading: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: `${theme.palette.primary.dark} !important`,
        cursor: "pointer",
      },
      color: theme.palette.text.dark,
      height: "80px",
    },
  })
);
