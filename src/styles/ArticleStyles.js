import {createStyles, makeStyles} from "@mui/styles";

export const articleStyles = makeStyles((theme) =>
    createStyles({
        articleWrapper: {
            width: "100% !important",
            height: "calc(100vh - 64px)",
            display: "flex",
            backgroundColor: theme.palette.background.light,
        },
        html: {
            fontFamily: "Cardo !important",
            height: "100%",
            width: "100% !important",
        },
    })
);
