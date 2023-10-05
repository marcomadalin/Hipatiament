import { articleStyles } from "../styles/ArticleStyles";

function GrupsSanguinis() {
  const classes = articleStyles();

  return <iframe className={classes.html} src="GrupsSanguinis.html" />;
}

export default GrupsSanguinis;
