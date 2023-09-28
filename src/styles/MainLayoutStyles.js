import { createStyles, makeStyles } from "@mui/styles";

export const mainLayoutStyles = makeStyles((theme) =>
  createStyles({
    navbar: {
      height: "64px !important",
      display: "flex",
      justifyContent: "space-between",
    },
  })
);
