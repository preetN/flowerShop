import React, { useEffect, useState } from "react";
import UserLayout from "../../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  collectOrderAction,
  getUserOrderListAction,
} from "../../../redux_firebase/order/orderAction";
import { Typography, Box, Tab, List } from "@mui/material";
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
  const previousList = displayList.filter(
    (item) => item.status === "collected"
  );
  const handleOnCollect = (item) => {
    dispatch(collectOrderAction(item));
  };
  return (
    <UserLayout>
      <Typography>My Orders</Typography>
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleOnChange}>
              <Tab label="Pending" value="tab-0" />
              <Tab label="Approved" value="tab-1" />
              <Tab label="Previous Orders" value="tab-2" />
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
                <CustomNestedList
                  item={item}
                  handleOnCollect={handleOnCollect}
                />
              ))}
            </List>
          </TabPanel>
          <TabPanel value="tab-2">
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-order-list"
            >
              {previousList.map((item) => (
                <CustomNestedList item={item} />
              ))}
            </List>
          </TabPanel>
        </TabContext>
      </Box>
    </UserLayout>
  );
}

export default Order;
