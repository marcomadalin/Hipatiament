import { createStyles, makeStyles } from "@mui/styles";

export const mainLayoutStyles = makeStyles((theme) =>
  createStyles({
    navbar: {
      height: "64px !important",
      display: "flex",
      justifyContent: "space-between",
    },
    navbarSm: {
      height: "64px !important",
      display: "flex",
    },
      nav: {
        display: "flex",
          gap: "30px",
      },
      link: {
        color: theme.palette.text.dark,
      },
      linkDrawer: {
          color: theme.palette.text.dark,
          display: "flex",
          alignSelf: "center",
      }
  })
);
