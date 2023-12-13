import React, { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { IconButton, Stack, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../../redux_firebase/admin/adminAction";
import CustomInput from "../../../components/custominput/CustomInput";
import bckImg from "../../../asset/images/background.avif";

function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin } = useSelector((state) => state.admin);

  useEffect(() => {
    admin?.uid && navigate("/admin-dashboard");
  }, [admin, navigate]);
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
    dispatch(loginAdmin(form));
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
        sx={{ height: "100vh" }}
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
        <Link className="link" to="/login">
          Login as User
        </Link>
      </Stack>
    </div>
  );
}

export default AdminLogin;
