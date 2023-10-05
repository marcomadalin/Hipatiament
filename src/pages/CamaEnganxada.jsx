import { articleStyles } from "../styles/ArticleStyles";

function CamaEnganxada() {
  const classes = articleStyles();

  return <iframe className={classes.html} src="CamaEnganxada.html" />;
}

export default CamaEnganxada;
