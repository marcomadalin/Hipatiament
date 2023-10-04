import { articleStyles } from "../styles/ArticleStyles";

function GrupSanguinis() {
  const classes = articleStyles();

  return <iframe className={classes.html} src="GrupsSanguinis.html" />;
}

export default GrupSanguinis;
