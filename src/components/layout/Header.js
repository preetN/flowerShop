import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header({ admin, handleOnSignout }) {
  const [open, setOpen] = useState(null);
  const handleOpenNavMenu = (event) => {
    setOpen(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setOpen(null);
  };
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              component="a"
              color="secondary"
              href="/"
              sx={{
                mr: 2,
                textDecoration: "none",
              }}
            >
              Flower Shop
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "coloum" }}>
              {admin?.uid ? (
                <Button onClick={handleOnSignout} color="secondary">
                  SignOut
                </Button>
              ) : (
                <>
                  <Link to="/login">
                    <Button color="secondary">SignIn / SignUp</Button>
                  </Link>
                </>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              component="a"
              href="/"
              color="secondary"
              sx={{
                mr: 2,
                textDecoration: "none",
              }}
            >
              Flower Shop
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={open}
              open={Boolean(open)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {admin?.uid ? (
                <MenuItem key="signout">
                  <Button onClick={handleOnSignout}>SignOut</Button>
                </MenuItem>
              ) : (
                <MenuItem key="signin">
                  <Button>SignUp / SignIn </Button>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
