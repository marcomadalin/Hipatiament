import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { homeStyles } from "../styles/HomeStyles.js";
import Button from "@mui/material/Button";
import facebookIcon from "../assets/images/facebook.svg";
import instagramIcon from "../assets/images/instagram.svg";
import tiktokIcon from "../assets/images/tiktok.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import photo1 from "../assets/images/article1.jpg";
import photo2 from "../assets/images/article2.jpg";
import photo3 from "../assets/images/article3.jpg";
import photo4 from "../assets/images/article4.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const classes = homeStyles();
  const theme = useTheme();

  const navigate = useNavigate();

  const large = useMediaQuery(theme.breakpoints.up("lg"));

  const articles = [
    {
      name: "ELS GRUPS SANGUINIS",
      photo: photo1,
      alt: "GRUPS SANGUINIS",
      link: "/GrupsSanguinis",
    },
    {
      name: " L’ALZHEIMER, UNA MALALTIA GENÈTICA?",
      photo: photo2,
      alt: "ALZHEIMER",
      link: "",
    },
    {
      name: "PHINEAS GAGE, L’HOME QUE VA SOBREVIURE A UNA PERFORACIÓ CRANEAL",
      photo: photo3,
      alt: "PHINEAS GAGE",
      link: "",
    },
    {
      name: "LES PASTILLES ANTICONCEPTIVES",
      photo: photo4,
      alt: "PASTILLES ANTICONCEPTIVES",
      link: "",
    },
  ];

  return (
    <>
      <section
        className={`${classes.section1} ${
          large ? "justify-between" : "justify-normal"
        }`}
      >
        <div className={classes.headingsBox}>
          <div className="mb-16">
            <Typography variant="h1" className={classes.heading1}>
              Divulgació científica en català per
            </Typography>
            <Typography variant="h1" className={classes.heading2}>
              il·luminar la teva ment.
            </Typography>
          </div>
          <Typography paragraph className={classes.subheading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
            mi quis finibus pretium. Proin ut auctor velit. Duis non rutrum
            metus. Donec aliquam interdum interdum. Vivamus at rhoncus neque.
            Phasellus vulputate dignissim nulla nec imperdiet.
          </Typography>
          <Button className={classes.subscribe}>Subscriu-te</Button>
          <div className={classes.mediaBox}>
            <a
              href="https://www.facebook.com/hipatiament"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a
              href="https://instagram.com/hipatiament?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={instagramIcon} alt="instagram" />
            </a>
            <a
              href="https://www.tiktok.com/@hipatiament"
              target="_blank"
              rel="noreferrer"
            >
              <img src={tiktokIcon} alt="tiktok" />
            </a>
          </div>
        </div>
        {large && (
          <div className={classes.mainImageBox}>
            <Box
              component="img"
              className={classes.mainImage}
              alt="Coneixemnt"
              src="https://i.pinimg.com/564x/64/57/2c/64572cfbe1a767bd7bad406f7fc1e0ae.jpg"
            />
          </div>
        )}
      </section>
      <section className={classes.section2}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            800: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay={true}
          grabCursor={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {articles.map((item, key) => {
            return (
              <SwiperSlide key={key} className={classes.slide}>
                <article className={classes.articleBox}>
                  <Box
                    component="img"
                    className={classes.articleImage}
                    alt={item.alt}
                    src={item.photo}
                    onClick={() => {
                      navigate(item.link);
                    }}
                  />
                  <Typography
                    align="center"
                    variant="h5"
                    className={classes.articleHeading}
                    onClick={() => {
                      navigate(item.link);
                    }}
                  >
                    {item.name}
                  </Typography>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

export default Home;
