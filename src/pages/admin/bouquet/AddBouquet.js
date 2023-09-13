import React, { useState } from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Button, Paper, Stack, InputAdornment } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/FireBase";
import { Store } from "react-notifications-component";
import CustomInput from "../../../components/custominput/CustomInput";
import { notification } from "../../../components/notification/Notify";
function AddBouquet() {
  const [form, setForm] = useState({});
  const inputfield = [
    {
      label: "Bouquet Name",
      type: "text",
      color: "secondary",
      name: "bname",
      variant: "filled",
    },
    {
      label: "Bouquet Description",
      type: "text",
      color: "secondary",
      name: "description",
      variant: "filled",
    },
    {
      label: "Image",
      color: "secondary",
      type: "url",
      name: "img",
      variant: "filled",
    },
    {
      label: "Price",
      variant: "filled",
      color: "secondary",
      name: "price",
      type: "number",
      InputProps: {
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      },
    },
  ];
  const navigate = useNavigate();
  const handleOnAdd = (e) => {
    e.preventDefault();
    addDoc(collection(db, "bouquet"), form)
      .then(() => {
        Store.addNotification({
          ...notification,
          title: "Wonderful!",
          message: "Bouquet successfully added to the database",
          type: "success",
        });
        return navigate("/bouquet");
      })
      .catch(() => console.log("Error"));
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
