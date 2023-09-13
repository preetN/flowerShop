import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { getAllBouquetAction } from "../redux_firebase/bouquetAction";
function Bouquet() {
  getAllBouquetAction();
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
