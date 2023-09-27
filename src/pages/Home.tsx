import { Box, Typography } from "@mui/material";
import { homeStyles } from "../styles/HomeStyles.js";
import Button from "@mui/material/Button";
import facebookIcon from "../assets/images/facebook.svg";
import instagramIcon from "../assets/images/instagram.svg";
import tiktokIcon from "../assets/images/tiktok.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

function Home() {
  const classes = homeStyles();

  return (
    <>
      <section className={`${classes.section1}`}>
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
        <div className={classes.mainImageBox}>
          <Box
            component="img"
            className={classes.mainImage}
            alt="Coneixemnt"
            src="https://i.pinimg.com/564x/64/57/2c/64572cfbe1a767bd7bad406f7fc1e0ae.jpg"
          />
        </div>
      </section>
      <section className={classes.section2}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Home;
