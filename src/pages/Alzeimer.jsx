import { articleStyles } from "../styles/ArticleStyles";

function Alzeimer() {
  const classes = articleStyles();

  return <iframe className={classes.html} src="Alzeimer.html" />;
}

export default Alzeimer;
