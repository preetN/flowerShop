import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBouquetAction } from "../admin/redux_firebase/bouquetAction";
function Customers() {
  console.log("customers");
  return <AdminLayout>Customers Page</AdminLayout>;
}

export default Customers;
