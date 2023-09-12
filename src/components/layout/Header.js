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
import { useDispatch, useSelector } from "react-redux";
import { setAdmin } from "./../../pages/admin/redux_firebase/adminSlice";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/FireBase";
const pages = [
  { page: "Orders", path: "/orders" },
  { page: "Customers", path: "/customers" },
  { page: "Bouquet", path: "/bouquet" },
];

function Header() {
  const { admin } = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(null);
  const handleOpenNavMenu = (event) => {
    setOpen(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setOpen(null);
  };
  const handleOnSignout = () => {
    signOut(auth).then(() => {
      dispatch(setAdmin({}));
    });

    console.log("SignedOut ", admin);
    navigate("/admin-login");
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "pink" }}>
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
              href="/admin-dashboard"
              sx={{
                mr: 2,
                textDecoration: "none",
                color: "white",
              }}
            >
              Flower Shop
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "coloum" }}>
              {pages.map((page) => (
                <Button
                  key={page.page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to={page.path}>{page.page}</Link>
                </Button>
              ))}
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
              variant="h5"
              component="a"
              href="/admin-dashboard"
              sx={{
                mr: 2,
                textDecoration: "none",
                color: "white",
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
              color="inherit"
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
              {pages.map((page) => (
                <MenuItem key={page.page}>
                  <Link to={page.path} style={{ textDecoration: "none" }}>
                    <Button>{page.page}</Button>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem key="signout">
                <Button onClick={handleOnSignout}>SignOut</Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
