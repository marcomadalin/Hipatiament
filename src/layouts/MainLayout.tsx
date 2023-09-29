import { Outlet, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { mainLayoutStyles } from "../styles/MainLayoutStyles";

function MainLayout() {
  const classes = mainLayoutStyles();

  const navigate = useNavigate();

  return (
    <>
      <div style={{ height: "64px" }}>
        <AppBar className="px-10" component="nav">
          <Toolbar className={classes.navbar}>
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
