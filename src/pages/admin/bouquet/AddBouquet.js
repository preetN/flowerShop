import React, { useState } from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Button, Paper, Stack, InputAdornment } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../../components/custominput/CustomInput";
import { addBouquetAction } from "../../../redux_firebase/bouquet/bouquetAction";
function AddBouquet() {
  const [form, setForm] = useState({});
  const inputfield = [
    {
      label: "Bouquet Name",
      type: "text",
      color: "secondary",
      name: "bname",
      variant: "filled",
      required: "required",
    },
    {
      label: "Bouquet Description",
      type: "text",
      color: "secondary",
      name: "description",
      variant: "filled",
      required: "required",
    },
    {
      label: "Image",
      color: "secondary",
      type: "url",
      name: "img",
      variant: "filled",
      required: "required",
    },
    {
      label: "Price",
      variant: "filled",
      color: "secondary",
      name: "price",
      type: "number",
      required: "required",
      InputProps: {
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      },
    },
    {
      label: "Date",
      color: "secondary",
      type: "date",
      name: "date",
      variant: "filled",
      required: "required",
      helperText: "Date on which, this bouquet is introduced",
    },
  ];
  const navigate = useNavigate();
  const handleOnAdd = (e) => {
    e.preventDefault();
    console.log(form);
    addBouquetAction(form);
    navigate("/bouquet");
  };
  return (
    <AdminLayout>
      <Link to="/bouquet">
        <Button color="secondary" variant="contained">
          Go back
        </Button>
      </Link>
      <Stack
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper elevation={4}>
          <Stack
            id="formki"
            component={"form"}
            sx={{
              minWidth: "400px",
              p: 2,
              borderRadius: 1,
            }}
            spacing={2}
            onSubmit={handleOnAdd}
          >
            {inputfield.map((input) => (
              <CustomInput
                {...input}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            ))}
            <Button type="submit">Add</Button>
          </Stack>
        </Paper>
      </Stack>
    </AdminLayout>
  );
}

export default AddBouquet;
