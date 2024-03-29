import {
    Alert,
    Box,
    CircularProgress,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Fab,
    IconButton,
    Snackbar,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import CloseIcon from "@mui/icons-material/Close";
import {homeStyles} from "../styles/HomeStyles.js";
import Button from "@mui/material/Button";
import facebookIcon from "../assets/images/facebook.svg";
import instagramIcon from "../assets/images/instagram.svg";
import tiktokIcon from "../assets/images/tiktok.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination} from "swiper/modules";
import star from "../assets/images/star.png";
import main from "../assets/images/main.jpg";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import emailjs from "@emailjs/browser";
import Constants from "../utils/Constants.js";

function Home() {
    const classes = homeStyles();
    const theme = useTheme();

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackBarType, setSnackBarType] = useState("");

    const large = useMediaQuery(theme.breakpoints.up("lg"));

    const small = useMediaQuery(theme.breakpoints.down("sm"));


    const openContactDialog = () => {
        setOpen(true);
        setLoading(false);
        setName("");
        setEmail("");
        setText("");
        setLoading(false);
        setSnackBarType("");
        setSnackbarMessage("");
        setOpenSnackbar(false);
    };

    const closeContactDialog = () => {
        setName("");
        setEmail("");
        setText("");
        setOpen(false);
        setLoading(false);
    };

    const sendMail = async () => {
        setLoading(true);
        emailjs
            .send(
                "service_g397j5e",
                "template_377i82h",
                {
                    name: name,
                    email: email,
                    message: text,
                },
                "GLPJXKvhfJ93PLqcn",
            )
            .then(
                function () {
                    setLoading(false);
                    // @ts-ignore
                    setSnackBarType("success");
                    setSnackbarMessage("Missatge enviat !");
                    setOpenSnackbar(true);
                    closeContactDialog();
                },
                function () {
                    // @ts-ignore
                    setSnackBarType("error");
                    setSnackbarMessage("Hi ha hagut un error, torna a provar");
                    setLoading(false);
                }
            ).finally(function () {
                setLoading(false)
            }
        );
    };

    const closeSnackbar = (
        _event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={closeSnackbar}
                anchorOrigin={{vertical: "top", horizontal: "center"}}
                sx={{width: "400px !important", marginTop: "50px"}}
            >
                <Alert
                    onClose={closeSnackbar}
                    // @ts-ignore
                    severity={snackBarType}
                    sx={{width: "100%"}}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
            <section
                className={`${classes.section1} ${
                    large ? "justify-between" : "justify-normal"
                }`}
            >
                <div className={classes.headingsBox}>
                    <div className="mb-16">
                        <Typography variant="h1" className={classes.heading1}>
                            Divulgació científica en català per
                        </Typography>
                        <Typography variant="h1" className={classes.heading2}>
                            il·luminar la teva ment.
                        </Typography>
                    </div>
                    <Typography paragraph className={classes.subheading}>
                        Hipàtiament és una web de divulgació científica en català per apropar la ciència que ens envolta
                        dia a dia i fer front a les fake news; donant una perspectiva feminista seguint l’exemple
                        d’Hipàtia i reivindicant la nostra llengua: el català.
                    </Typography>
                    <div className={`${small ? classes.buttonsWrapperSm : classes.buttonsWrapperLg}`}>
                        <Button className={classes.subscribe} onClick={openContactDialog}>Subscriu-te</Button>
                        <Button className={classes.participate}>Participa</Button>
                    </div>
                    <div className={classes.mediaBox}>
                        <a
                            href="https://www.facebook.com/hipatiament"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={facebookIcon} alt="facebook"/>
                        </a>
                        <a
                            href="https://instagram.com/hipatiament?igshid=MzRlODBiNWFlZA=="
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                            <img src={instagramIcon} alt="instagram"/>
                        </a>
                        <a
                            href="https://www.tiktok.com/@hipatiament"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={tiktokIcon} alt="tiktok"/>
                        </a>
                    </div>
                </div>
                {large && (
                    <div className={classes.mainImageBox}>
                        <Box
                            component="img"
                            className={classes.mainImage}
                            alt="Coneixemnt"
                            src={main}
                        />
                    </div>
                )}
            </section>
            <section className={classes.section2}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={true}
                    grabCursor={true}
                    navigation={true}
                    centeredSlides={true}
                    initialSlide={0}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className={classes.swiper}
                >
                    {Constants.articles.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={classes.slide}>
                                <article className={classes.articleBox}>
                                    <div className={classes.difficultyBox}>
                                        <Typography className="pr-2">Dificultat: </Typography>
                                        {Array.from({length: item.difficulty}).map(() => {
                                            return (
                                                <Box
                                                    component="img"
                                                    alt="star"
                                                    src={star}
                                                    sx={{
                                                        width: "20px",
                                                        height: "20px",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                            );
                                        })}
                                    </div>
                                    <Box
                                        component="img"
                                        className={classes.articleImage}
                                        alt={item.alt}
                                        src={item.photo}
                                        onClick={() => {
                                            navigate(item.link);
                                        }}
                                    />
                                    <Typography
                                        align="center"
                                        variant="h6"
                                        className={classes.articleHeading}
                                        onClick={() => {
                                            navigate(item.link);
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </article>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </section>
            <section className={classes.section3}>

            </section>
            <div className={classes.floatingButtonBox}>
                <Fab
                    className={classes.contactButton}
                    size="large"
                    color="primary"
                    aria-label="contact"
                    onClick={openContactDialog}
                >
                    <MessageIcon/>
                </Fab>
            </div>
            <Dialog
                className={classes.contactDialog}
                open={open}
                onClose={closeContactDialog}
            >
                <div className="w-full">
                    <IconButton onClick={closeContactDialog}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <DialogTitle sx={{fontSize: "30px", paddingTop: "0px"}}>
                    Contacte
                </DialogTitle>
                <DialogContent
                    className={classes.dialogContent}
                    sx={{width: "100% !important"}}
                >
                    {loading ? (
                        <Container className={classes.loadingBox}>
                            <CircularProgress color="secondary"/>
                        </Container>
                    ) : (
                        <Stack className={classes.inputsStack}>
                            <TextField
                                placeholder="Nom"
                                variant="standard"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                                className={classes.input}
                                inputProps={{style: {padding: "15px"}}}
                            />
                            <TextField
                                required
                                placeholder="Correu *"
                                variant="standard"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                className={classes.input}
                                inputProps={{style: {padding: "15px"}}}
                            />
                            <TextField
                                required
                                placeholder="Telèfon"
                                variant="standard"
                                value={phone}
                                onChange={(event) => {
                                    setPhone(event.target.value);
                                }}
                                className={classes.input}
                                inputProps={{style: {padding: "15px"}}}
                            />
                            <TextField
                                required
                                placeholder="Empresa"
                                variant="standard"
                                value={company}
                                onChange={(event) => {
                                    setCompany(event.target.value);
                                }}
                                className={classes.input}
                                inputProps={{style: {padding: "15px"}}}
                            />
                            <TextField
                                placeholder="Escriu aqui...."
                                variant="standard"
                                multiline
                                minRows="7"
                                value={text}
                                onChange={(event) => {
                                    setText(event.target.value);
                                }}
                                className={classes.input}
                            />
                        </Stack>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={sendMail}
                        classes={{
                            root: classes.dialogButton,
                            disabled: classes.dialogButtonDisabled,
                        }}
                        disabled={
                            email === null ||
                            !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ||
                            loading
                        }
                    >
                        Envia
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Home;
