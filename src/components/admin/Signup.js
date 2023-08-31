import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
// import { auth } from "../config/FireBase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
function Signup() {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("I am submitted");
    console.log(form);
    //Signup oprertions
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
            id="confirmpassword"
            name="confirmpassword"
            label="Confirm Password"
            type="password"
            variant="standard"
          />
          <Button color="secondary" variant="contained" type="submit">
            SignUp
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default Signup;
