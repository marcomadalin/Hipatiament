import {articleListStyles} from "../styles/ArticleListStyles";
import Constants from "../utils/Constants.js";
import React, {useEffect, useState} from "react";
import {
    Box,
    InputAdornment,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import star from "../assets/images/star.png";
import {useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function ArticleList() {

    const classes = articleListStyles();
    const theme = useTheme();

    const navigate = useNavigate()

    const small = useMediaQuery(theme.breakpoints.down("md"));
    const large = useMediaQuery(theme.breakpoints.up("md"));

    const [search, setSearch] = useState("")
    const [articles, setArticles] = useState(Constants.articles)

    useEffect(() => {
        const filterArticles = () => {
            const searchLowercase = search.toLowerCase()

            setArticles(Constants.articles.filter(article =>
                article.name.toLowerCase().includes(searchLowercase) || article.firstParagraph.toLowerCase().includes(searchLowercase)
            ))
        }
        filterArticles()
    }, [search])

    return (
        <div className={classes.mainDiv}>
            <div className={classes.searchDiv}>
                <Typography variant="h3" className={`${small ? classes.heading1xs : classes.heading1}`}>
                    ARTICLES
                </Typography>
                <TextField
                    placeholder="Paraules clau"
                    variant="standard"
                    value={search}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                    onChange={(event) => {
                        setSearch(event.target.value)
                    }}
                    className={`${classes.input} ${small ? classes.inputWith : ""}`}
                    inputProps={{style: {padding: "15px"}}}
                />
            </div>
            <List>
                {
                    articles.map((item, key) => (
                        <ListItem key={key} className={`${large ? classes.articleListLg : classes.articleListSm}`}>
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
