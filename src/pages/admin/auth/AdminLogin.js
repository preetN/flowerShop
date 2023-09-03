import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { IconButton, TextField, Stack, Paper } from "@mui/material";
import { auth } from "../../../config/FireBase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Notification from "../../../components/notification/Notification";
import { useNavigate } from "react-router-dom";
function AdminLogin() {
  const [form, setForm] = useState({});
  const [openSnackbar, setOpenSnackBar] = useState({
    open: false,
    message: "snackbar",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;

        setOpenSnackBar({
          open: true,
          severity: "success",
          message: "Welcome " + user.email,
        });
        navigate("/admin-dashboard");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setOpenSnackBar({
          open: true,
          severity: "error",
          message: errorMessage,
        });
      });
  };
  return (
    <div>
      <Stack
        sx={{ height: "90vh" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Paper elevation={4}>
          <Stack
            component={"form"}
            onSubmit={handleOnSubmit}
            sx={{
              width: "300px",
              p: 2,
              borderRadius: 1,
            }}
            spacing={2}
            direction={"column"}
          >
            <TextField
              required
              id="standard-required"
              label="User Email"
              type="email"
              name="email"
              variant="standard"
              onChange={handleOnChange}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              name="password"
              variant="standard"
              onChange={handleOnChange}
            />
            <IconButton
              type="submit"
              size="large"
              variant="outlined"
              color="secondary"
            >
              <LoginIcon />
            </IconButton>
          </Stack>
          <Notification setOpenSnackBar={setOpenSnackBar} {...openSnackbar} />
        </Paper>
      </Stack>
    </div>
  );
}

export default AdminLogin;
