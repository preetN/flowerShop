import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { getAllBouquetAction } from "../redux_firebase/bouquetAction";
import { useDispatch, useSelector } from "react-redux";
function Bouquet() {
  const dispatch = useDispatch();
  const { bouquetlist } = useSelector((state) => state.bouquet);
  useEffect(() => {
    dispatch(getAllBouquetAction());
  }, [dispatch]);
  console.log("A");
  return (
    <AdminLayout>
      <Link to="/addbouquet">
        <Button variant="contained" color="secondary">
          Add Bouquet
        </Button>
      </Link>
      <Box component="div">
        {bouquetlist.map((l) => (
          <>
            <div>{l.bname}</div>
            <img src={l.img} width="200px" alt="bouquet photo" />
          </>
        ))}
      </Box>
    </AdminLayout>
  );
}

export default Bouquet;
