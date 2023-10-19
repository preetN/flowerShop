import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Label } from "@mui/icons-material";

function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("hello");
  };
  return (
    <UserLayout>
      <Stack
        flexDirection={"row"}
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
              <TextField
                id="firstname"
                name="firstname"
                label="First Name"
                variant="outlined"
              />
              <TextField
                id="lastname"
                name="lastname"
                label="Last Name"
                variant="outlined"
              />
            </Box>
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
            />
            <TextField
              id="message"
              name="message"
              label="Message for Us"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button color="secondary" variant="contained" type="submit">
              Submit
            </Button>
          </Paper>
        </Box>
      </Stack>
    </UserLayout>
  );
}

export default Contact;
