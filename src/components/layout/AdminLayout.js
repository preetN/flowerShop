import React, { useState } from "react";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Container,
  Button,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Paper,
  MenuList,
  Popper,
} from "@mui/material";
import { Link } from "react-router-dom";
function AdminLayout({ children }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const pages = ["Orders", "SignUP", "ullu"];
  const handleMenuList = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuDown = () => {};
  return (
    <>
      <AppBar
        sx={{
          background: "pink",
        }}
      >
        <Toolbar>
          <IconButton>
            <LocalFloristIcon />
          </IconButton>
          <Typography variant="h6">FlowerShop</Typography>
          <Box display={{ xs: "none", md: "flex" }}>
            {pages.map((page) => (
              <Button>{page}</Button>
            ))}
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <IconButton onClick={handleMenuList}>
              <MenuIcon />
            </IconButton>
            <Popper open={menuOpen}>
              <Paper>
                <MenuList onKeyDown={handleMenuDown}>
                  {pages.map((page) => (
                    <MenuItem>{page}</MenuItem>
                  ))}
                </MenuList>
              </Paper>
            </Popper>
          </Box>
        </Toolbar>
      </AppBar>
      <Box minHeight="60vh">{children}</Box>
      <Box
        bgcolor="text.secondary"
        height="100px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        &copy; All Rights Reserved || Made By Me ❤️
      </Box>
    </>
  );
}

export default AdminLayout;
