import {createStyles, makeStyles} from "@mui/styles";

export const collaborationsStyles = makeStyles((theme) =>
    createStyles({
        mainDiv: {
            minHeight: "calc(100vh - 64px)",
            backgroundColor: theme.palette.background.pink,
            padding: "40px 60px 40px 60px",
        },
        heading2: {
            fontSize: "44px !important",
            marginBottom: "30px !important",
            color: theme.palette.text.dark,
        },
        heading2xs: {
            fontSize: "36px !important",
            marginBottom: "30px !important",
            color: theme.palette.text.dark,
        },
    })
);
