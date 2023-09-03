import { Button, Paper, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { auth } from "../../../config/FireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Notification from "../../../components/notification/Notification";
function AdminSignup() {
  const [form, setForm] = useState({});
  const [helptext, setHelpText] = useState("");
  const [openSnackbar, setOpenSnackBar] = useState({
    open: false,
    message: "snackbar",
  });
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleOnFocus = (e) => {
    if (form.password !== form.confirmpassword) {
      console.log(form.password, form.confirmpassword);
      setHelpText("didn't match");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    //Signup oprertions
    if (helptext === "didn't match") {
      setOpenSnackBar({
        open: true,
        severity: "warning",
        message: "Passwords didn't match",
      });
      return;
    }
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setOpenSnackBar({
          open: true,
          severity: "success",
          message: "Welcome " + user.email,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setOpenSnackBar({
          open: true,
          severity: "error",
          message: errorMessage,
        });
      });
  };
  return (
    <Stack
      sx={{ height: "90vh" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Paper elevation={4}>
        <Stack
          component={"form"}
          direction={"column"}
          spacing={2}
          sx={{
            p: 2,
            width: "300px",
            borderRadius: 1,
          }}
          onSubmit={handleOnSubmit}
        >
          <TextField
            onChange={handleOnChange}
            id="firstname"
            name="fname"
            label="First Name"
            variant="standard"
          />
          <TextField
            onChange={handleOnChange}
            id="lastname"
            name="lname"
            label="Last Name"
            variant="standard"
          />
          <TextField
            onChange={handleOnChange}
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="standard"
          />
          <TextField
            onChange={handleOnChange}
            id="phoneno"
            name="pno"
            label="Phone No."
            type="number"
            variant="standard"
          />

          <TextField
            onChange={handleOnChange}
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="standard"
          />
          <TextField
            onChange={handleOnChange}
            onBlur={handleOnFocus}
            id="confirmpassword"
            name="confirmpassword"
            label="Confirm Password"
            type="password"
            variant="standard"
            helperText={helptext}
          />
          <Button color="secondary" variant="contained" type="submit">
            SignUp
          </Button>
        </Stack>
        <Notification setOpenSnackBar={setOpenSnackBar} {...openSnackbar} />
      </Paper>
    </Stack>
  );
}

export default AdminSignup;
