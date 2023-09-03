import React from "react";
import { Alert, Snackbar } from "@mui/material";
function Notification({ open, severity, message, setOpenSnackBar }) {
  const handleSnackBar = () => {
    setOpenSnackBar({ open: false });
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={1200}
      onClose={handleSnackBar}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
}

export default Notification;
