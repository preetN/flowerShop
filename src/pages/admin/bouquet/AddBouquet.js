import React, { useState } from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Button, Paper, TextField, Stack, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/FireBase";
function AddBouquet() {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleOnAdd = (e) => {
    e.preventDefault();
    addDoc(collection(db, "bouquet"), form)
      .then(() => {
        console.log("fone");
        return setForm("");
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
            component={"form"}
            sx={{
              minWidth: "400px",
              p: 2,
              borderRadius: 1,
            }}
            spacing={2}
            onSubmit={handleOnAdd}
          >
            <TextField
              label="Bouquet Name"
              type="text"
              color="secondary"
              name="bname"
              variant="filled"
              onChange={handleOnChange}
            />
            <TextField
              label="Bouquet Description"
              color="secondary"
              type="textarea"
              rows={10}
              name="description"
              variant="filled"
              onChange={handleOnChange}
            />
            <TextField
              label="Image"
              color="secondary"
              type="url"
              name="img"
              variant="filled"
              onChange={handleOnChange}
            />
            <TextField
              label="Price"
              variant="filled"
              color="secondary"
              name="price"
              type="number"
              onChange={handleOnChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
            <Button type="submit">Add</Button>
          </Stack>
        </Paper>
      </Stack>
    </AdminLayout>
  );
}

export default AddBouquet;
