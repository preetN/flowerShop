import React from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Table,
  TableContainer,
  Paper,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { getAllUserAction } from "../../../redux_firebase/user/userAction";
function Customers() {
  const dispatch = useDispatch();

  dispatch(getAllUserAction());

  const { usersList } = useSelector((state) => state.user);

  return (
    <AdminLayout>
      <Box component="div">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Ph number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersList.map((item) => (
                <TableRow
                  key={item.fname}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.lname}
                  </TableCell>
                  <TableCell align="right">{item.fname} </TableCell>
                  <TableCell align="right">{item.email}</TableCell>
                  <TableCell align="right">{item.pno}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </AdminLayout>
  );
}

export default Customers;
