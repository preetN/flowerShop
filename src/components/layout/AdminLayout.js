import React from "react";
import { Box } from "@mui/material";
function AdminLayout({ children }) {
  // const pages = ["Orders", "SignUP", "ullu"];
  return (
    <>
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
