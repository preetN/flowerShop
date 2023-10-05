import { Button, Paper, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { auth, db } from "../../../config/FireBase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Store } from "react-notifications-component";
import { notification } from "../../../components/notification/Notify";
import CustomInput from "../../../components/custominput/CustomInput";
import { useDispatch } from "react-redux";
import { getUserAction } from "../../../redux_firebase/user/userAction";
import bckImg from "../../../asset/images/background.avif";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ type: "user" });
  const [helptext, setHelpText] = useState("");
  const inputfield = [
    {
      id: "firstname",
      name: "fname",
      label: "First Name",
      variant: "standard",
    },
    { id: "lastname", name: "lname", label: "Last Name", variant: "standard" },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      variant: "standard",
    },
    {
      id: "phoneno",
      name: "pno",
      label: "Phone No.",
      type: "number",
      variant: "standard",
    },
    {
      id: "password",
      name: "password",
      label: "Password",
      type: "password",
      variant: "standard",
    },
  ];

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
      Store.addNotification({
        ...notification,
        title: "Fail",
        message: "Passwords didn't match",
        type: "warning",
      });
      return;
    }
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        //creating admin named database and adding admin information to it
        const { password, confirmpassword, ...rest } = form;
        setDoc(doc(db, "user", user.uid), rest)
          .then(() => console.log("Done"))
          .catch(() => console.log("Error"));
        Store.addNotification({
          ...notification,
          title: "LogIn successful",
          message: "Welcome " + user.email,
          type: "success",
        });
        dispatch(getUserAction(user.uid));

        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Store.addNotification({
          ...notification,
          title: "Fail",
          message: errorMessage,
          type: "danger",
        });
      });
  };
  return (
    <Stack
      sx={{ height: "100vh" }}
      justifyContent={"center"}
      alignItems={"center"}
      className="background"
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
          {inputfield.map((input) => (
            <CustomInput
              {...input}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          ))}
          <TextField
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
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
      </Paper>
    </Stack>
  );
}

export default Signup;
