import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { Box, Paper } from "@mui/material";

function Profile() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <UserLayout>
        <Paper elevation={4}>Profile Page</Paper>
      </UserLayout>
    </>
  );
}

export default Profile;
