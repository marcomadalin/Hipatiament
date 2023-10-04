import { articleStyles } from "../styles/ArticleStyles";

function PhineasGage() {
  const classes = articleStyles();

  return <iframe className={classes.html} src="PhineasGage.html" />;
}

export default PhineasGage;
