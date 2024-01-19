import {createStyles, makeStyles} from "@mui/styles";

export const aboutMeStyles = makeStyles((theme) =>
    createStyles({
        mainDiv: {
            minHeight: "calc(100vh - 64px)",
            backgroundColor: theme.palette.background.pink,
            padding: "40px 60px 40px 60px",
        },
        mainImageBox: {
            height: "100",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        mainImage: {
            minWidth: "350px",
            minHeight: "466px",
            maxWidth: "500px",
            maxHeight: "666px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        bioDivLg: {
            display: "flex",
            marginBottom: "50px",
            gap: "50px",
        },
        bioDivSm: {
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            marginBottom: "50px",
        },
        heading1: {
            fontSize: "48px !important",
            marginBottom: "30px !important",
            color: theme.palette.text.black,
        },
        heading2: {
            fontSize: "44px !important",
            marginBottom: "30px !important",
            color: theme.palette.text.dark,
        },
        subheading: {
            fontSize: "40px !important",
            marginBottom: "30px !important",
            color: theme.palette.text.black,
        },
        heading1xs: {
            fontSize: "36px !important",
            marginBottom: "30px !important",
            color: theme.palette.text.black,
        },
        heading2xs: {
            fontSize: "36px !important",
            marginBottom: "30px !important",
            color: theme.palette.text.dark,
        },
        subheadingxs: {
            fontSize: "26px !important",
            marginBottom: "30px !important",
            color: theme.palette.text.black,
        },
        inputsStack: {
            width: "100% !important",
        },
        input: {
            width: "100% !important",
            marginBottom: "40px !important",
            backgroundColor: `${theme.palette.background.light} !important`,
            color: `${theme.palette.text.dark} !important`,
            "& .MuiInput-underline:after": {
                borderBottomColor: theme.palette.primary.highlight,
            },
        },
        loadingBox: {
            display: "flex !important",
            justifyContent: "center !important",
            alignItems: "center !important",
            height: "350px",
        },
        dialogButton: {
            width: "100px !important",
            color: `${theme.palette.text.dark} !important`,
            backgroundColor: `${theme.palette.primary.highlight} !important`,
            borderRadius: "0px !important",
        },
        dialogButtonDisabled: {
            width: "100px !important",
            color: `${theme.palette.text.dark} !important`,
            backgroundColor: `${theme.palette.primary.dark} !important`,
            borderRadius: "0px !important",
        },
    })
);
