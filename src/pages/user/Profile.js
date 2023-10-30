import React, { useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Table,
  TableCell,
  TableRow,
  Typography,
  TableBody,
} from "@mui/material";
import profileImg from "../../asset/images/dummy_profileimg.png";
import CustomInput from "../../components/custominput/CustomInput";
import { useNavigate } from "react-router-dom";
function Profile() {
  const { user } = useSelector((state) => state.user);
  const [form, setForm] = useState(user);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const inputfield = [
    {
      id: "firstname",
      name: "fname",
      label: "First Name",
      variant: "outlined",
      value: form.fname,
    },
    {
      id: "lastname",
      name: "lname",
      label: "Last Name",
      variant: "outlined",
      value: form.lname,
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      variant: "outlined",
      value: form.email,
    },
    {
      id: "pno",
      name: "pno",
      label: "Phone number",
      variant: "outlined",
      value: form.pno,
    },
  ];
  const handleOnSave = () => {
    window.confirm("Are you sure you want to change details");
    setForm("");
    setEdit(false);
    navigate("/profile");
  };
  const handleOnEdit = () => {
    setEdit(true);
  };
  return (
    <>
      <UserLayout>
        <Box height={"80vh"} bgcolor={"primary.main"}>
          <Box height={"150px"} bgcolor={"secondary.main"}></Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            position={"absolute"}
            top={"100px"}
            width={"100%"}
          >
            <Avatar
              alt="dummyprofileimage"
              src={profileImg}
              sx={{
                width: 200,
                height: 200,
                border: "10px solid secondary.main",
              }}
            />
            <Box>
              {edit ? (
                <Stack gap={"10px"} width={"300px"} margin={"20px"}>
                  {inputfield.map((input) => (
                    <CustomInput
                      key={input.fname}
                      color="secondary"
                      {...input}
                      onChange={(e) => console.log(e.target.value)}
                    />
                  ))}
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleOnSave}
                  >
                    Save Changes
                  </Button>
                </Stack>
              ) : (
                <Stack
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleOnEdit}
                    sx={{
                      margin: "20px",
                    }}
                  >
                    Edit Profile
                  </Button>
                  <Table sx={{ width: "70vw" }}>
                    <TableBody>
                      {inputfield.map((input) => (
                        <>
                          <TableRow>
                            <TableCell align="center">
                              <Typography variant="overline">
                                {input.label}+" "
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography variant="body1">
                                {input.value}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </>
                      ))}
                    </TableBody>
                  </Table>
                </Stack>
              )}
            </Box>
          </Box>
        </Box>
      </UserLayout>
    </>
  );
}

export default Profile;
