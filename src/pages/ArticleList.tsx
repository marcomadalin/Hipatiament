import {articleListStyles} from "../styles/ArticleListStyles";
import Constants from "../utils/Constants.js";
import React, {useState} from "react";
import {Box, List, ListItem, ListItemAvatar, ListItemText, Typography, useMediaQuery, useTheme} from "@mui/material";
import star from "../assets/images/star.png";
import {useNavigate} from "react-router-dom";

function ArticleList() {
    const classes = articleListStyles();
    const theme = useTheme();

    const small = useMediaQuery(theme.breakpoints.down("md"));
    const large = useMediaQuery(theme.breakpoints.up("md"));

    const [articles, setArticles] = useState(Constants.articles)

    const navigate = useNavigate()

    return (
        <div className={classes.mainDiv}>
            <Typography variant="h3" className={`${small ? classes.heading1xs : classes.heading1}`}>
                ARTICLES
            </Typography>
            <List>
                {
                    articles.map((item, key) => (
                        <ListItem className={`${large ? classes.articleListLg : classes.articleListSm}`}>
                            {
                                small && (
                                    <Typography variant="h1" className={classes.heading2xs}>
                                        {item.name}
                                    </Typography>
                                )
                            }
                            <ListItemAvatar className={classes.articleImage} onClick={() => navigate(item.link)}>
                                <Box
                                    component="img"
                                    className={classes.mainImage}
                                    alt={item.alt}
                                    src={item.photo}
                                />
                            </ListItemAvatar>
                            <ListItemText sx={{maxWidth: "800px"}}>
                                {
                                    !small && (
                                        <Typography variant="h1" className={classes.heading2}>
                                            {item.name}
                                        </Typography>
                                    )
                                }
                                <Typography>
                                    {item.date}
                                </Typography>
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
                                <Typography paragraph align="justify">
                                    {item.firstParagraph}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    ))
                }
            </List>
        </div>
    );
}

export default ArticleList;
