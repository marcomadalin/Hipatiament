import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { mainLayoutStyles } from "../styles/MainLayoutStyles";

function MainLayout() {
  const classes = mainLayoutStyles();

  const links: { text: string }[] = [
    { text: "Inici" },
    { text: "Articles" },
    { text: "Videos" },
    { text: "Contacte" },
  ];

  return (
    <>
      <div style={{ height: "64px" }}>
        <AppBar className="px-10" component="nav">
          <Toolbar className={classes.navbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={(): void => {}}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5">HIPÀTIAMENT</Typography>

            <div className={classes.linkBox}>
              {links.map((item, key) => (
                <Button
                  key={key}
                  variant="text"
                  color="secondary"
                  className={classes.link}
                  size="large"
                  disableRipple
                >
                  {item.text}
                </Button>
              ))}
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Outlet />
    </>
  );
}

export default MainLayout;
