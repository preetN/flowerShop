import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";
function AdminLayout({ children }) {
  return (
    <>
      <Box display={"flex"} width={"100%"}>
        <SideNav />
        <Box sx={{ width: { xs: "90%", lg: "80%" }, flexGrow: 1 }}>
          <Header />
          <Box minHeight="72vh">{children}</Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default AdminLayout;
