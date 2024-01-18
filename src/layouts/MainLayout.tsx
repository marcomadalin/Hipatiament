import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { mainLayoutStyles } from "../styles/MainLayoutStyles";
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState} from "react";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme
} from "@mui/material";

function MainLayout() {
  const classes = mainLayoutStyles();
  const theme = useTheme();

  const navigate = useNavigate();
  const location = useLocation();
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
  };

  const links = [
      {
          url: "/",
          name: "Inici"
      },
      {
          url: "/articles",
          name: "Articles"
      },
      {
          url: "/sobreMi",
          name: "Sobre mi"
      },
  ]

  return (
      <>
          <div style={{height: "64px"}}>
              <AppBar className="px-10" component="nav">
                  <Toolbar className={`${small ? classes.navbarSm : classes.navbar}`}>
                      <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          edge="start"
                          onClick={handleDrawerToggle}
                          sx={{mr: 2, display: {sm: 'none'}}}
                      >
                          <MenuIcon/>
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
                      {!small && (
                          <div className={classes.nav}>
                              {links.map((item, key) => (
                                  <Link key={key} to={item.url} className={classes.link}>
                                      <Typography
                                          fontWeight={location.pathname === item.url ? "bold" : "normal"}>
                                          {item.name}
                                      </Typography>
                                  </Link>
                              ))}
                          </div>
                      )}
                  </Toolbar>
              </AppBar>
          </div>
          <nav>
              <Drawer
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                      keepMounted: true,
                  }}
                  sx={{
                      display: {xs: 'block', sm: 'none'},
                      '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 240,
                          background: theme.palette.primary.main},
                  }}
              >
                  <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                      <Typography variant="h5" sx={{ my: 2 }}>
                          HIPÀTIAMENT
                      </Typography>
                      <Divider />
                      <List>
                          {links.map((item, key) => (
                              <ListItem key={key} disablePadding>
                                  <ListItemButton sx={{ display: 'flex', justifyContent: 'center' }}>
                                      <Link key={key} to={item.url} className={classes.linkDrawer} >
                                          <Typography
                                              alignSelf={"center"}
                                              fontWeight={location.pathname === item.url ? "bold" : "normal"}>
                                              {item.name}
                                          </Typography>
                                      </Link>
                                  </ListItemButton>
                              </ListItem>
                          ))}
                      </List>
                  </Box>
              </Drawer>
          </nav>
          <Outlet/>
      </>
  );
}

export default MainLayout;
