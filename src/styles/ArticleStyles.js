import { createStyles, makeStyles } from "@mui/styles";

export const articleStyles = makeStyles((theme) =>
  createStyles({
    html: {
      width: "100% !important",
      height: "calc(100vh - 64px)",
    },
  })
);
