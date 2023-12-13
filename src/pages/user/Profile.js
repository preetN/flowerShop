import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
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
import { updateUserAction } from "../../redux_firebase/user/userAction";
function Profile() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    pno: user.pno,
  });
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    user?.uid === undefined && navigate("/");
  }, [user, navigate]);
  const inputfield = [
    {
      id: "fname",
      name: "fname",
      label: "First Name",
      variant: "outlined",
      value: form.fname,
    },
    {
      id: "lname",
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
      disabled: "disabled",
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
    dispatch(updateUserAction(user.uid, form));
    setEdit(false);
    navigate("/profile");
  };
  const handleOnEdit = () => {
    setEdit(true);
  };
  const handleOnChange = (e) => {
    console.log("change");
    setForm((prev) => {
      let helper = { ...prev };
      helper[`${e.target.id}`] = e.target.value;
      return helper;
    });
  };
  return (
    <>
      <UserLayout>
        <Box minHeight={"90vh"}>
          <Box height={"150px"} bgcolor="text.secondary"></Box>
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
                      onChange={handleOnChange}
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
                                {input.label}
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
