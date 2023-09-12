import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Bouquet() {
  return (
    <AdminLayout>
      <Link to="/addbouquet">
        <Button variant="contained" color="secondary">
          Add Bouquet
        </Button>
      </Link>
    </AdminLayout>
  );
}

export default Bouquet;
