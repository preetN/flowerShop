import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { useSelector } from "react-redux";
function AdminDashboard() {
  const { admin } = useSelector((state) => state.admin);
  console.log(admin);
  return <AdminLayout>Hello admin dashboard</AdminLayout>;
}

export default AdminDashboard;
