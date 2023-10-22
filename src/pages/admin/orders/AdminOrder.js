import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import OrderTable from "./OrderTable";
function AdminOrder() {
  return (
    <AdminLayout>
      <OrderTable />
    </AdminLayout>
  );
}

export default AdminOrder;
