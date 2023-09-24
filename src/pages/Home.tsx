import { Box, Typography } from "@mui/material";
import { homeStyles } from "../styles/HomeStyles.js";

function Home() {
  const classes = homeStyles();

  return (
    <>
      <section className={`${classes.section1}`}>
        <div className={classes.headingsBox}>
          <div className="mb-16">
            <Typography variant="h3" className={classes.heading1}>
              Divulgació científica en català per
            </Typography>
            <Typography variant="h2" className={classes.heading2}>
              il·luminar la teva ment.
            </Typography>
          </div>
          <Typography paragraph className={classes.subheading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
            mi quis finibus pretium. Proin ut auctor velit. Duis non rutrum
            metus. Donec aliquam interdum interdum. Vivamus at rhoncus neque.
            Phasellus vulputate dignissim nulla nec imperdiet.
          </Typography>
        </div>
        <div className={classes.mainImageBox}>
          <Box
            component="img"
            className={classes.mainImage}
            alt="Coneixemnt"
            src="https://i.pinimg.com/564x/64/57/2c/64572cfbe1a767bd7bad406f7fc1e0ae.jpg"
          />
        </div>
      </section>
      <section className={classes.section2}></section>
    </>
  );
}

export default Home;
