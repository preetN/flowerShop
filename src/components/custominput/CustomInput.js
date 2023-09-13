import { TextField } from "@mui/material";
import React from "react";

function CustomInput({ ...rest }) {
  return <TextField {...rest} />;
}

export default CustomInput;
