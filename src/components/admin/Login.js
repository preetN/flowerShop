import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import {
  IconButton,
  Button,
  TextField,
  Stack,
  Box,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
  Paper,
} from "@mui/material";
function Login() {
  const [value, setValue] = useState("");
  return (
    <div>
      <Stack
        sx={{ height: "90vh" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Paper elevation={4}>
          <Stack
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
              label="Required"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              error={!value}
              helperText={!value ? "Required" : "Don't share"}
              variant="standard"
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <IconButton size="large" variant="outlined" color="secondary">
              <LoginIcon />
            </IconButton>
          </Stack>{" "}
        </Paper>
      </Stack>

      {/* <Stack>
        <Button startIcon={<LoginIcon />}>Login</Button>

        <ButtonGroup variant="outlined" orientation="horizontal" color="error">
          <Button>Left</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ToggleButtonGroup>
          <ToggleButton value="bold"></ToggleButton>
          <ToggleButton value="uderlined"></ToggleButton>
        </ToggleButtonGroup>
      </Stack> */}
    </div>
  );
}

export default Login;
