import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
function AdminLayout({ children }) {
  return (
    <>
      <Header />
      <Box minHeight="60vh">{children}</Box>
      <Footer />
    </>
  );
}

export default AdminLayout;
