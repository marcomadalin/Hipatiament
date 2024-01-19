import {aboutMeStyles} from "../styles/AboutMeStyles";
import {
    Alert,
    Box,
    CircularProgress,
    Container,
    Snackbar,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import profile from "../assets/images/profile.jpg";
import React, {useState} from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";


function AboutMe() {
    const classes = aboutMeStyles();
    const theme = useTheme();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackBarType, setSnackBarType] = useState("");

    const large = useMediaQuery(theme.breakpoints.up("md"));
    const small = useMediaQuery(theme.breakpoints.down("md"));

    const sendMail = async () => {
        setLoading(true);
        emailjs
            .send(
                "service_g397j5e",
                "template_377i82h",
                {
                    name: name,
                    email: email,
                    phone: phone,
                    company: company,
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
        event: React.SyntheticEvent | Event,
        reason?: string) => {
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
            <div className={classes.mainDiv}>
                <Typography variant="h3" className={`${small ? classes.heading2xs : classes.heading2}`}>Qui
                    soc?</Typography>
                <div className={`${large ? classes.bioDivLg : classes.bioDivSm}`}>
                    <div className={classes.mainImageBox}>
                        <Box
                            component="img"
                            className={classes.mainImage}
                            alt="Coneixemnt"
                            src={profile}
                        />
                    </div>
                    <div>
                        <div>
                            <Typography variant="h1" className={`${small ? classes.heading1xs : classes.heading1}`}>
                                EMMA SANCHO COPOVÍ
                            </Typography>
                            <Typography variant="h2"
                                        className={`${small ? classes.subheadingxs : classes.subheadingxs}`}>
                                TÈCNIC DE LABORATORI, TÈCNIC DE FARMACIA I ESTUDIANT DE LOGOPÈDIA
                            </Typography>
                            <Typography paragraph>
                                Sóc Emma Sancho, ja vaig ser divulgadora científica, ara mateix
                                tècnic de laboratori i tècnic de farmàcia i futura logopeda.
                            </Typography>
                            <Typography paragraph> Sempre m’ha apassionat el món de la ciència i la investigació, crec
                                que és tot un món per descobrir i que encara no se’l reconeix com
                                és degut.
                            </Typography>
                            <Typography paragraph>A més a més, crec que el tema femení sempre ha estat un poc tabú
                                en aquests àmbits, on els “problemes de les dones” s’han silenciat o
                                no se li han pres la importància que mereix.
                            </Typography>
                            <Typography paragraph>
                                Hipatiament naix per a combatre aquestes injustícies, per a explicar
                                la ciència a tothom i que estigaa a l’avast de tothom, però sobretot
                                fent-ho amb la meva llengua: el català.
                            </Typography>
                        </div>
                    </div>
                </div>
                <Typography variant="h3"
                            className={`${small ? classes.heading2xs : classes.heading2}`}>CONTACTE</Typography>
                <Typography className="pb-10">
                    No dubtis en contactar-me per qualsevol dubte, proposta, projecte,... estaré encantada
                    d’ajudar-te!
                </Typography>
                <form>
                    <Stack className={classes.inputsStack}>
                        {loading ? (
                            <Container className={classes.loadingBox}>
                                <CircularProgress color="secondary"/>
                            </Container>
                        ) : (
                            <>
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
                            </>)
                        }
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
                    </Stack>
                </form>
            </div>
        </>
    );
}

export default AboutMe;
