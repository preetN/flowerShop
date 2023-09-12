import React from "react";
import { Box, createTheme, ThemeProvider, Button } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";
import { red, green } from "@mui/material/colors";
function AdminLayout({ children }) {
  const color_theme = createTheme({
    palette: {
      primary: red,
      secondary: green,
    },
  });
  return (
    <ThemeProvider theme={color_theme}>
      <Header />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Button color="secondary"> Go back</Button>
        <Box minHeight="60vh">{children}</Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default AdminLayout;
