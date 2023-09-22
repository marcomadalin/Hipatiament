import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function MainLayout() {
  const links: { text: string }[] = [
    { text: "Articles" },
    { text: "Videos" },
    { text: "Contacte" },
  ];

  return (
    <div>
      <AppBar component="nav">
        <Toolbar className="flex justify-between">
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

          <div className="flex">
            {links.map((item, key) => (
              <Button
                key={key}
                variant="text"
                color="secondary"
                size="large"
                disableRipple
              >
                {item.text}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
}

export default MainLayout;
