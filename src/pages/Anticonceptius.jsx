import { articleStyles } from "../styles/ArticleStyles";

function Anticonceptius() {
  const classes = articleStyles();

  return <iframe className={classes.html} src="Anticonceptius.html" />;
}

export default Anticonceptius;
