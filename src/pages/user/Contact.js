import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

function Contact() {
  const adminList = useSelector((state) => state.admin);

  return (
    <UserLayout>
      <Typography variant="h2">Contact Us</Typography>
    </UserLayout>
  );
}

export default Contact;
