import {createStyles, makeStyles} from "@mui/styles";

export const articleListStyles = makeStyles((theme) =>
    createStyles({
        mainDiv: {
            minHeight: "calc(100vh - 64px)",
            backgroundColor: theme.palette.background.pink,
            padding: "40px 60px 40px 60px",
        },
        searchDiv: {
            width: "100% !important",
            display: "flex !important",
            justifyContent: "space-between !important"
        },
        articleListLg: {
            display: "flex",
            alignItems: "start !important",
            gap: "30px !important",
            marginBottom: "50px",
        },
        articleListSm: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "start !important",
            gap: "10px",
            marginBottom: "40px"
        },
        heading2: {
            fontSize: "34px !important",
            color: theme.palette.text.black,
            marginBottom: "20px !important"
        },
        heading2xs: {
            width: "100% !important",
            display: "flex !important",
            justifyContent: "flex-start !important",
            fontSize: "26px !important",
            color: theme.palette.text.black,
        },
        heading1: {
            display: "flex !important",
            marginLeft: "15px !important",
            fontSize: "34px !important",
            color: theme.palette.text.dark,
            marginBottom: "40px !important",
            alignItems: "center !important",
        },
        heading1xs: {
            display: "flex !important",
            marginLeft: "15px !important",
            fontSize: "26px !important",
            color: theme.palette.text.dark,
            alignItems: "center !important",
        },
        articleImage: {
            "&:hover": {
                cursor: "pointer",
            },
        },
        mainImageBox: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        mainImage: {
            minWidth: "200px",
            minHeight: "200px",
            maxWidth: "500px",
            maxHeight: "500px",
            width: "100%",
            height: "100%",
            objectFit: "cover"
        },
        difficultyBox: {
            display: "flex",
            alignItems: "center",
            marginBottom: "20px"
        },
        input: {
            backgroundColor: `${theme.palette.background.pink} !important`,
            color: `${theme.palette.text.dark} !important`,
            "& .MuiInput-underline:after": {
                borderBottomColor: theme.palette.primary.highlight,
            },
        },
        inputWith: {
            maxWidth: "180px !important"
        }
    })
);
