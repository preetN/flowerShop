import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { getAllUserAction } from "../../redux_firebase/user/userAction";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { getAllOrderAction } from "../../redux_firebase/order/orderAction";
import { getAllQueryAction } from "../../redux_firebase/query/queryAction";
function AdminDashboard() {
  const dispatch = useDispatch();
  dispatch(getAllQueryAction());
  dispatch(getAllUserAction());
  dispatch(getAllOrderAction());
  const { bouquetlist } = useSelector((state) => state.bouquet);
  const { admin } = useSelector((state) => state.admin);
  console.log(bouquetlist.length, " ", admin);
  return (
    <AdminLayout>
      <Typography variant="h3">
        Hello {admin.fname} {admin.lname}, Welocme to Dashboard
      </Typography>
      <Typography variant="body1">
        Today, we have total {bouquetlist.length} categories of bouquets.
      </Typography>
    </AdminLayout>
  );
}

export default AdminDashboard;
