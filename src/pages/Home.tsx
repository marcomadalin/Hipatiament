import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import CloseIcon from "@mui/icons-material/Close";
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
import photo5 from "../assets/images/article5.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const classes = homeStyles();
  const theme = useTheme();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

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
      link: "/Alzeimer",
    },
    {
      name: "PHINEAS GAGE, L’HOME QUE VA SOBREVIURE A UNA PERFORACIÓ CRANEAL",
      photo: photo3,
      alt: "PHINEAS GAGE",
      link: "/PhineasGage",
    },
    {
      name: "LES PASTILLES ANTICONCEPTIVES",
      photo: photo4,
      alt: "PASTILLES ANTICONCEPTIVES",
      link: "/Anticonceptius",
    },
    {
      name: "TENIR UNA CAMA ENGANXADA AL COS",
      photo: photo5,
      alt: "CAMA ENGANXADA",
      link: "/CamaEnganxada",
    },
  ];

  const openContactDialog = () => {
    setOpen(true);
  };

  const closeContactDialog = () => {
    setName("");
    setEmail("");
    setText("");
    setOpen(false);
  };

  const sendMail = async () => {
    closeContactDialog();
  };

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
          className={classes.swiper}
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
      <div className={classes.floatingButtonBox}>
        <Fab
          className={classes.contactButton}
          size="large"
          color="primary"
          aria-label="contact"
          onClick={openContactDialog}
        >
          <MessageIcon />
        </Fab>
      </div>
      <Dialog
        className={classes.contactDialog}
        open={open}
        onClose={closeContactDialog}
      >
        <div className="w-full">
          <IconButton onClick={closeContactDialog}>
            <CloseIcon />
          </IconButton>
        </div>
        <DialogTitle sx={{ fontSize: "30px", paddingTop: "0px" }}>
          Contacte
        </DialogTitle>
        <DialogContent
          className={classes.dialogContent}
          sx={{ width: "100% !important" }}
        >
          <Stack className={classes.inputsStack}>
            <TextField
              placeholder="Nom"
              variant="standard"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              className={classes.input}
              inputProps={{ style: { padding: "15px" } }}
            />
            <TextField
              required
              placeholder="Correu"
              variant="standard"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className={classes.input}
              inputProps={{ style: { padding: "15px" } }}
            />
            <TextField
              placeholder="Escriu aqui...."
              variant="standard"
              multiline
              minRows="7"
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
              className={classes.input}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={sendMail} className={classes.dialogButton}>
            Envia
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Home;
