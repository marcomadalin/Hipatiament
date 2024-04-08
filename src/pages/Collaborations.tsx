import {collaborationsStyles} from "../styles/CollaborationsStyles";
import {

    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import React from "react"

// @ts-ignore
import Microlink from '@microlink/react'

function Collaborations() {
    const classes = collaborationsStyles();
    const theme = useTheme();

    const large = useMediaQuery(theme.breakpoints.up("md"));
    const small = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <div className={classes.mainDiv}>
                <Typography paragraph align="justify" className="pt-7">
                    Si vols saber un poc més del meu treball, pots entrar a l’apartat Articles o veure’m en diferents projectes on he col·laborat.
                </Typography>
                <Typography variant="h6" className={`${small ? classes.heading2xs : classes.heading2} pt-7`}>TELEVISIÓ</Typography>
                <div>
                    <Microlink url="https://www.ccma.cat/3cat/t1xc5-poderoses/video/6268104/#onboarding=true" fetchData loop size="large"/>
                </div>
            </div>
        </>
    );
}

export default Collaborations;
