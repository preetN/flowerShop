import React, { useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CustomInput from "../../components/custominput/CustomInput";
import { addQueryAction } from "../../redux_firebase/query/queryAction";
import { useNavigate } from "react-router-dom";
function Contact() {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };
  const [form, setForm] = useState(initialState);
  const inputfield = [
    {
      id: "firstname",
      name: "firstname",
      label: "First Name",
      variant: "outlined",
      value: form.firstname,
    },
    {
      id: "lastname",
      name: "lastname",
      label: "Last Name",
      variant: "outlined",
      value: form.lastname,
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      variant: "outlined",
      value: form.email,
    },
    {
      id: "message",
      name: "message",
      label: "Message for Us",
      variant: "outlined",
      multiline: "multiline",
      rows: "4",
      value: form.message,
    },
  ];
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    addQueryAction(form);
    setForm(initialState);
  };
  return (
    <UserLayout>
      <Container>
        <Stack
          sx={{ flexDirection: { xs: "column", md: "row" } }}
          gap={"10px"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          marginTop={"40px"}
        >
          <Box>
            <Typography variant="h2">Contact Us</Typography>
            <Typography variant="p">
              If you have any query then please submit it in the form we will be
              in touch soon!
            </Typography>
          </Box>
          <Box>
            <Paper
              elevation={3}
              component={"form"}
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                gap: "10px",
              }}
              onSubmit={handleOnSubmit}
            >
              <Box sx={{ display: "flex", gap: "10px" }}>
                <CustomInput
                  {...inputfield[0]}
                  onChange={(e) => handleOnChange(e)}
                />
                <CustomInput
                  {...inputfield[1]}
                  onChange={(e) => handleOnChange(e)}
                />
              </Box>

              <CustomInput
                {...inputfield[2]}
                onChange={(e) => handleOnChange(e)}
              />
              <CustomInput
                {...inputfield[3]}
                onChange={(e) => handleOnChange(e)}
              />
              <Button color="secondary" variant="contained" type="submit">
                Submit
              </Button>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </UserLayout>
  );
}

export default Contact;
