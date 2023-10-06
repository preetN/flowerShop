import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function OrderTable() {
  const [displayList, setDisplayList] = useState([]);
  const { orderList } = useSelector((state) => state.order);
  useEffect(() => {
    setDisplayList(orderList);
  }, [orderList]);

  const handleOnApprove = (item) => {};
  return (
    <Box component="div">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Order Date</TableCell>
              <TableCell align="center">CustomerId</TableCell>
              <TableCell align="center">Customer Email</TableCell>
              <TableCell align="center">Order Ref Image</TableCell>
              <TableCell align="center">Item Name</TableCell>
              <TableCell align="center">Item Price</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
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
                  {item.userId}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.userEmail}
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
                <TableCell component="th" scope="row">
                  {item.status === "pending" ? (
                    <Button
                      variant="contained"
                      onClick={() => handleOnApprove(item)}
                    >
                      Approve
                    </Button>
                  ) : (
                    <Button disabled>Finished</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default OrderTable;
