import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";
function AdminLayout({ children }) {
  return (
    <>
      <Header />

      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box
          minHeight="72vh"
          margin="20px"
          sx={{
            width: "80%",
          }}
        >
          {children}
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default AdminLayout;
