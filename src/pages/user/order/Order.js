import React, { useEffect, useState } from "react";
import UserLayout from "../../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderListAction } from "../../../redux_firebase/order/orderAction";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
  TableContainer,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Order() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { currentUserOrderList } = useSelector((state) => state.order);
  const [displayList, setDisplayList] = useState(currentUserOrderList);
  useEffect(() => {
    user?.uid ? dispatch(getUserOrderListAction(user.email)) : navigate("/");
  }, [user, navigate, dispatch]);
  return (
    <UserLayout>
      <Typography>My Orders</Typography>

      <Box component="div">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Order Date</TableCell>
                <TableCell align="center">Order Ref Image</TableCell>
                <TableCell align="center">Item Name</TableCell>
                <TableCell align="center">Item Price</TableCell>
                <TableCell align="center">Statu</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayList?.map((item) => (
                <TableRow
                  key={item.itemName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.orderDate}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    <img src={item.itemImg} width="200px" alt="bouquet" />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.itemName}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.itemPrice}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </UserLayout>
  );
}

export default Order;
