import React, { useEffect, useState } from "react";
import UserLayout from "../../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { getCartAction } from "../../../redux_firebase/cart/cartAction";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  Container,
} from "@mui/material";

function Cart() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartAction(user.uid));
  }, []);
  console.log(cart);
  const total = cart
    .map((item) => item.itemPrice * item.itemQty)
    .reduce((sum, i) => sum + i, 0);
  return (
    <UserLayout>
      <Container>
        <Box margin={"50px"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h2">Your Shopping Cart</Typography>
            <Typography variant="body2">Continue Shopping</Typography>
          </Box>

          <Typography marginTop={"20px"}> Total Items={cart.length}</Typography>
        </Box>

        <Box display={"flex"} justifyContent={"center"} margin={"50px"}>
          <TableContainer component={Paper} sx={{ maxWidth: 1000 }}>
            <Table sx={{ minWidth: 450 }} aria-label="shopping cart">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow>
                    <TableCell>{item.itemName}</TableCell>
                    <TableCell align="right">{item.itemPrice}</TableCell>
                    <TableCell align="right">{item.itemQty}</TableCell>
                    <TableCell align="right">
                      {item.itemPrice * item.itemQty}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell align="right" colSpan={3}>
                    Order Total
                  </TableCell>
                  <TableCell align="right">{total}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </UserLayout>
  );
}

export default Cart;
