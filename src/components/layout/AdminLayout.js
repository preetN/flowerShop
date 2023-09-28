import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";
import { setAdmin } from "../../redux_firebase/admin/adminSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../config/FireBase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AdminLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin } = useSelector((state) => state.admin);
  const handleOnSignout = () => {
    signOut(auth).then(() => {
      dispatch(setAdmin({}));
    });

    navigate("/");
  };
  return (
    <>
      <Header admin={admin} handleOnSignout={handleOnSignout} />

      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box
          minHeight="72vh"
          margin="20px"
          sx={{
            width: "80%",
          }}
        >
          {children}
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default AdminLayout;
