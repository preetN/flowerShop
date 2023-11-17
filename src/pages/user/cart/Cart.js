import React, { useState } from "react";
import UserLayout from "../../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
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
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  emptyCart,
  removeFromCart,
} from "../../../redux_firebase/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { addOrderAction } from "../../../redux_firebase/order/orderAction";

function Cart() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [order, setOrder] = useState(false);
  const { cartItem } = useSelector((state) => state.cart);
  const total = cartItem
    .map((item) => item.itemPrice * item.itemQty)
    .reduce((sum, i) => sum + i, 0);

  const handleOnRemove = (index) => {
    dispatch(removeFromCart(index));
  };
  const handleOnOrder = () => {
    setOrder(true);
  };
  const handleOnConfirmOrder = () => {
    const date = new Date();
    const orderDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    const orderobj = {
      userId: user.uid,
      userEmail: user.email,
      orderItems: cartItem.length,
      orderDetails: cartItem,
      orderTotal: total,
      orderDate: orderDate,
      status: "pending",
    };
    console.log(orderobj);
    addOrderAction(orderobj);
    dispatch(emptyCart());
    navigate("/");
  };
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
            <Link to="/products">
              <Typography variant="body2">Continue Shopping</Typography>
            </Link>
          </Box>

          <Typography marginTop={"20px"}>
            Total Items={cartItem.length}
          </Typography>
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
                {cartItem?.map((item, i) => (
                  <TableRow>
                    <TableCell>{item.itemName}</TableCell>
                    <TableCell align="right">{item.itemPrice}</TableCell>

                    <TableCell align="right">
                      {item.itemQty}{" "}
                      <Button onClick={() => handleOnRemove(i)}>Remove</Button>
                    </TableCell>
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
        {cartItem.length > 0 && (
          <Button color="secondary" onClick={handleOnOrder} variant="contained">
            Ready To Order
          </Button>
        )}
        {order && (
          <>
            <Accordion>
              <AccordionSummary>
                <Typography expandIcon={<ExpandMoreIcon color="secondary" />}>
                  Shipping Method
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Pay and Pick up at shop</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>
                <Typography expandIcon={<ExpandMoreIcon color="secondary" />}>
                  Order Summary
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {cartItem.map((item) => (
                  <>
                    <Typography>{item.itemName}</Typography>
                    <Typography>{item.itemPrice}</Typography>
                    <Typography>{item.itemQty}</Typography>
                  </>
                ))}
              </AccordionDetails>
            </Accordion>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleOnConfirmOrder}
            >
              Confirm Order
            </Button>
          </>
        )}
      </Container>
    </UserLayout>
  );
}

export default Cart;
