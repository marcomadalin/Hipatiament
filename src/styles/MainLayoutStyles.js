import { createStyles, makeStyles } from "@mui/styles";

export const mainLayoutStyles = makeStyles((theme) =>
  createStyles({
    navbar: {
      height: "64px !important",
      display: "flex",
      justifyContent: "space-between",
    },
    linkBox: {
      display: "flex",
      justifyContent: "space-between",
      width: "550px",
    },
    link: {
      "&:hover": {
        backgroundColor: `${theme.palette.primary.main} !important`,
      },
    },
  })
);
