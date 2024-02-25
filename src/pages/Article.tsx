import {articleStyles} from "../styles/ArticleStyles";
import {useLocation} from "react-router-dom";
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton, LinkedinIcon, LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton, WhatsappIcon,
    WhatsappShareButton
} from "@mindofmar/react-share";
import React, {useEffect, useState} from "react";
import Constants from "../utils/Constants";

function Article() {
    const classes = articleStyles();

    const location = useLocation();
    const article = location.pathname.substring(1) + ".html";
    const [articleInfo, setArticleInfo] = useState(Constants.articles[0])

    useEffect(() => {
        const foundArticle = Constants.articles.find(article => article.link === "/" + location.pathname.substring(1));
        // @ts-ignore
        setArticleInfo(foundArticle);
    }, [location.pathname]);

    return (
        <div className={classes.articleWrapper}>
            <iframe title="Article" className={classes.html} src={article}/>
            {/*
            <div className="flex justify-center">
                <div className={classes.shareWrapper}>
                    <FacebookShareButton
                        url={"https://hipatiament.vercel.app" + articleInfo.link}>
                        <FacebookIcon size={32} round/>
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={"https://hipatiament.vercel.app" + articleInfo.link}
                        title={articleInfo.name}
                    >
                        <TwitterIcon size={32} round/>
                    </TwitterShareButton>
                    <WhatsappShareButton
                        url={"https://hipatiament.vercel.app" + articleInfo.link}
                        title={articleInfo.name}
                        separator=":: "
                    >
                        <WhatsappIcon size={32} round/>
                    </WhatsappShareButton>
                    <LinkedinShareButton
                        url={"https://hipatiament.vercel.app" + articleInfo.link}>
                        <LinkedinIcon size={32} round/>
                    </LinkedinShareButton>
                    <EmailShareButton
                        url={"https://hipatiament.vercel.app" + articleInfo.link}
                        subject={articleInfo.name}
                        body={articleInfo.firstParagraph}
                    >
                        <EmailIcon size={32} round/>
                    </EmailShareButton>
                </div>
            </div>
            */
             }
        </div>
    );
}

export default Article;
