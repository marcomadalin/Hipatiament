import {createStyles, makeStyles} from "@mui/styles";

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
        buttonsWrapperLg: {
            display: "flex",
            gap: "30px",
        },
        buttonsWrapperSm: {
            display: "flex",
            flexDirection: "column",
            gap: "30px",
        },
        subscribe: {
            backgroundColor: `${theme.palette.primary.highlight} !important`,
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
        participate: {
            backgroundColor: `${theme.palette.primary.highlight2} !important`,
            color: `${theme.palette.text.black} !important`,
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
        swiper: {
            zIndex: "9 !important",
        },
        floatingButtonBox: {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "10 !important",
        },
        contactButton: {
            color: `${theme.palette.text.dark} !important`,
            backgroundColor: `${theme.palette.primary.highlight} !important`,
        },
        contactDialog: {
            "& .MuiPaper-root": {
                backgroundColor: theme.palette.primary.main,
                maxWidth: "700px !important",
                width: "100% !important",
                padding: "20px 40px 40px 40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            },
            color: theme.palette.text.dark,
        },
        dialogContent: {
            marginTop: "20px",
            maxWidth: "400px !important",
            width: "100% !important",
        },
        inputsStack: {
            width: "100% !important",
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
        difficultyBox: {
            display: "flex",
            alignItems: "center",
        },
    })
);
