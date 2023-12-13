import React, { useEffect, useState } from "react";
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
  Tooltip,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  addToCart,
  emptyCart,
  removeFromCart,
} from "../../../redux_firebase/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { addOrderAction } from "../../../redux_firebase/order/orderAction";
import Checkbox from "@mui/material/Checkbox";
import SimpleNestedList from "../../../components/simpleNestedList/SimpleNestedList";

function Cart() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [order, setOrder] = useState(false);
  const { cartItem } = useSelector((state) => state.cart);
  useEffect(() => {
    user?.uid === undefined && navigate("/");
  }, [user, navigate]);
  const total = cartItem
    .map((item) => item.itemPrice * item.itemQty)
    .reduce((sum, i) => sum + i, 0);

  const handleOnRemove = (index) => {
    dispatch(removeFromCart(index));
  };
  const handleOnAdd = (item) => {
    console.log(item);
    dispatch(addToCart(item));
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
        <Box sx={{ margin: { md: "50px" } }}>
          <Box
            sx={{ display: { sm: "flex" } }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h2">Your Shopping Cart</Typography>
            <Box
              display={"flex"}
              sx={{ justifyContent: { xs: "space-evenly", md: "flex-end" } }}
              alignItems={"center"}
            >
              <Link to="/products">
                <Typography variant="body2">Continue Shopping</Typography>
              </Link>
              <Tooltip title="Empty Cart">
                <Button color="secondary" onClick={() => dispatch(emptyCart())}>
                  <DeleteIcon />
                </Button>
              </Tooltip>
            </Box>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          sx={{ margin: { md: "50px" } }}
        >
          <TableContainer component={Paper} sx={{ maxWidth: 1000 }}>
            <Table sx={{ minWidth: 450 }} aria-label="shopping cart">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Action</TableCell>

                  <TableCell align="center">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItem?.map((item, i) => (
                  <TableRow>
                    <TableCell>{item.itemName}</TableCell>
                    <TableCell align="center">${item.itemPrice}</TableCell>

                    <TableCell align="center">{item.itemQty}</TableCell>
                    <TableCell align="center">
                      <Button onClick={() => handleOnRemove(i)}>Remove</Button>
                      <Button onClick={() => handleOnAdd(item)}>
                        Add More
                      </Button>
                    </TableCell>

                    <TableCell align="center">
                      ${item.itemPrice * item.itemQty}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell align="center" colSpan={4}>
                    Order Total
                  </TableCell>
                  <TableCell align="right">${total}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {cartItem.length > 0 && (
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button
              sx={{
                margin: "0 20px 20px 0",
              }}
              color="secondary"
              onClick={handleOnOrder}
              variant="contained"
            >
              Ready To Order
            </Button>
          </Box>
        )}
        {order && cartItem.length > 0 && (
          <>
            <Box component={Paper} elevation={4} margin={"50px"}>
              <Accordion>
                <AccordionSummary>
                  <Typography expandIcon={<ExpandMoreIcon color="secondary" />}>
                    Shipping Method
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    <FormControlLabel
                      disabled
                      control={<Checkbox defaultChecked />}
                      label="Pickup at Shop front"
                    />
                    <FormControlLabel
                      disabled
                      control={<Checkbox />}
                      label="Delivery"
                    />
                  </FormGroup>
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
                    <SimpleNestedList i={item} />
                  ))}
                  <Typography
                    sx={{ float: "right" }}
                    variant="button"
                    marginBottom={"20px"}
                  >
                    Order Total: ${total}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <Button
                sx={{
                  margin: "0 20px 20px 0",
                }}
                variant="contained"
                color="secondary"
                onClick={handleOnConfirmOrder}
              >
                Place Order
              </Button>
            </Box>
          </>
        )}
      </Container>
    </UserLayout>
  );
}

export default Cart;
