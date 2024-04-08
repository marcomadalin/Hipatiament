import { articleStyles } from "../styles/ArticleStyles";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Constants from "../utils/Constants";

function Article() {
    const classes = articleStyles();
    const iframeRef = useRef(null);
    const location = useLocation();
    const [articleInfo, setArticleInfo] = useState(Constants.articles[0]);

    useEffect(() => {
        const foundArticle = Constants.articles.find(
            (article) => article.link === "/" + location.pathname.substring(1)
        );
        // @ts-ignore
        setArticleInfo(foundArticle);
    }, [location.pathname]);

    useEffect(() => {
        // @ts-ignore
        const receiveMessageFromIframe = (event) => {
            console.log("Message received from iframe:", event.data);
            // Redirect to /Anticonceptius only if the current path is not /Anticonceptius
            if (location.pathname !== '/Anticonceptius') {
                window.location.href = '/Anticonceptius';
            }
        };

        window.addEventListener("message", receiveMessageFromIframe);

        return () => {
            window.removeEventListener("message", receiveMessageFromIframe);
        };
    }, [location.pathname]);

    return (
        <div className={classes.articleWrapper}>
            <iframe ref={iframeRef} title="Article" className={classes.html} src={location.pathname.substring(1) + ".html"} />
        </div>
    );
}

export default Article;
