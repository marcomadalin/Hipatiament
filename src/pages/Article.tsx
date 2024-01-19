import {articleStyles} from "../styles/ArticleStyles";
import {useLocation} from "react-router-dom";

function Article() {
    const classes = articleStyles();

    const location = useLocation();
    const article = location.pathname.substring(1) + ".html";

    return (
        <div className={classes.articleWrapper}>
            <iframe title="Article" className={classes.html} src={article}/>
        </div>
    );
}

export default Article;
