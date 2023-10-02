import React, { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { IconButton, Stack, Paper } from "@mui/material";
import { auth } from "../../../config/FireBase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "react-notifications-component";
import { notification } from "../../../components/notification/Notify";
import CustomInput from "../../../components/custominput/CustomInput";
import { getUserAction } from "../../../redux_firebase/user/userAction";
import bckImg from "../../../asset/images/background.avif";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  console.log("user uid ", user.uid);
  useEffect(() => {
    user?.uid && navigate("/");
  }, [user, navigate]);
  const [form, setForm] = useState({});
  const inputfield = [
    {
      label: "User Email",
      type: "email",
      name: "email",
      variant: "standard",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      variant: "standard",
    },
  ];
  const handleOnSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        Store.addNotification({
          ...notification,
          title: "LogIn successful",
          message: "Welcome " + user.email,
          type: "success",
        });
        dispatch(getUserAction(user.uid));
      })
      .catch((error) => {
        const errorMessage = error.message;
        Store.addNotification({
          ...notification,
          title: "Fail",
          message: errorMessage,
          type: "danger",
        });
      });
  };
  return (
    <div
      style={{
        backgroundImage: ` url(${bckImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Stack
        sx={{
          height: "100vh",
        }}
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
            {inputfield.map((input, i) => (
              <CustomInput
                {...input}
                key={i}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            ))}

            <IconButton
              type="submit"
              size="large"
              variant="outlined"
              color="secondary"
            >
              <LoginIcon />
            </IconButton>
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
}

export default Login;