import { Outlet, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { mainLayoutStyles } from "../styles/MainLayoutStyles";

function MainLayout() {
  const classes = mainLayoutStyles();

  const navigate = useNavigate();

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
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              variant="h5"
              onClick={() => {
                navigate("");
              }}
            >
              HIPÀTIAMENT
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Outlet />
    </>
  );
}

export default MainLayout;
