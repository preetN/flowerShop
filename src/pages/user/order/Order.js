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
  Button,
  Tab,
  List,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";
import CustomNestedList from "../../../components/customnestedlist/CustomNestedList";

function Order() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("tab-0");
  const handleOnChange = (e, newValue) => {
    setValue(newValue);
  };
  const { user } = useSelector((state) => state.user);
  const { currentUserOrderList } = useSelector((state) => state.order);
  const [displayList, setDisplayList] = useState(currentUserOrderList);
  useEffect(() => {
    user?.uid ? dispatch(getUserOrderListAction(user.email)) : navigate("/");
  }, [user, navigate, dispatch]);
  useEffect(() => {
    setDisplayList(currentUserOrderList);
  }, [displayList, currentUserOrderList]);
  const pendingList = displayList.filter((item) => item.status === "pending");
  const approvedList = displayList.filter((item) => item.status === "approved");
  console.log(pendingList);
  return (
    <UserLayout>
      <Typography>My Orders</Typography>

      <Box component="div">
        <Box sx={{ width: "100%" }}>
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleOnChange}>
                <Tab label="Pending" value="tab-0" />
                <Tab label="Approved" value="tab-1" />
                <Tab label="History" value="tab-2" />
              </TabList>
            </Box>
            <TabPanel value="tab-0">
              <List
                sx={{ width: "100%", bgcolor: "background.paper" }}
                component="nav"
                aria-labelledby="nested-order-list"
              >
                {pendingList.map((item) => (
                  <CustomNestedList item={item} />
                ))}
              </List>
            </TabPanel>
            <TabPanel value="tab-1">
              <List
                sx={{ width: "100%", bgcolor: "background.paper" }}
                component="nav"
                aria-labelledby="nested-order-list"
              >
                {approvedList.map((item) => (
                  <CustomNestedList item={item} />
                ))}
              </List>
            </TabPanel>
            <TabPanel value="tab-2"> Item fkejdlwk</TabPanel>
          </TabContext>
        </Box>
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
                  key={item.orderDate}
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
                    {item.status === "pending" ? (
                      <Button variant="outlined" color="error">
                        {item.status}
                      </Button>
                    ) : (
                      <Button color="secondary" disabled>
                        {item.status}
                      </Button>
                    )}
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
