import React, { useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Container,
  Table,
  TableCell,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import profileImg from "../../asset/images/dummy_profileimg.png";
import CustomInput from "../../components/custominput/CustomInput";
import { Label } from "@mui/icons-material";
function Profile() {
  const { user } = useSelector((state) => state.user);
  const [form, setForm] = useState(user);
  const inputfield = [
    {
      id: "firstname",
      name: "firstname",
      label: "First Name",
      variant: "outlined",
      value: form.fname,
    },
    {
      id: "lastname",
      name: "lastname",
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
      id: "email",
      name: "email",
      label: "Email",
      variant: "outlined",
      value: form.pno,
    },
  ];
  const handleOnSave = () => {
    window.confirm("Are you sure you want to change details");
  };
  const handleOnChange = () => {
    setForm("");
  };
  return (
    <>
      <UserLayout>
        <Box height={"80vh"} bgcolor={"primary.main"}>
          <Box height={"150px"} bgcolor={"grey"}></Box>
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
              sx={{ width: 200, height: 200, border: "10px solid grey" }}
            />
            <Box>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleOnSave}
                sx={{ margin: "20px" }}
              >
                Save Changes
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleOnChange}
                sx={{
                  margin: "20px",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                }}
              >
                Edit Profile
              </Button>
              <Stack gap={"10px"}>
                {inputfield.map((input) => (
                  <CustomInput color="secondary" {...input} />
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </UserLayout>
    </>
  );
}

export default Profile;
