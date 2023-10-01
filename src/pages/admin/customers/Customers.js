import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { getAllUserAction } from "../../../redux_firebase/user/userAction";
import { useDispatch, useSelector } from "react-redux";
function Customers() {
  console.log("customers");
  const dispatch = useDispatch();

  dispatch(getAllUserAction());

  return <AdminLayout>Customers Page</AdminLayout>;
}

export default Customers;
