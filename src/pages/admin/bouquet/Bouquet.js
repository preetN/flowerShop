import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import BouquetTable from "./BouquetTable";

function Bouquet() {
  return (
    <AdminLayout>
      <Link to="/addbouquet">
        <Button variant="contained" color="secondary">
          Add Bouquet
        </Button>
      </Link>
      <hr />
      <BouquetTable />
    </AdminLayout>
  );
}

export default Bouquet;
