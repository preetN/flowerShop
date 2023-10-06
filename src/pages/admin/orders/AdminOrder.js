import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { useSelector } from "react-redux";
import OrderTable from "./OrderTable";
function AdminOrder() {
  return (
    <AdminLayout>
      <OrderTable />
    </AdminLayout>
  );
}

export default AdminOrder;
