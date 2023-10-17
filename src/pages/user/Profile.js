import React, { useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import profileImg from "../../asset/images/dummy_profileimg.png";
function Profile() {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <UserLayout>
        <Typography variant="h2">My Profile</Typography>
        <Box
          component={"div"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection="column"
          padding={5}
          typography={"body1"}
        >
          <Avatar
            alt="dummyprofileimage"
            src={profileImg}
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant="caption" color={"primary"}>
            {user.fname} {user.lname}{" "}
          </Typography>
          <Table sx={{ width: "60%" }}>
            <TableRow>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center"> {user.fname}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center"> {user.lname}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center"> {user.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Phone no</TableCell>
              <TableCell align="center"> {user.pno}</TableCell>
            </TableRow>
          </Table>
        </Box>
      </UserLayout>
    </>
  );
}

export default Profile;
