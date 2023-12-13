import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { getAllUserAction } from "../../redux_firebase/user/userAction";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Box, Typography } from "@mui/material";
import { getAllOrderAction } from "../../redux_firebase/order/orderAction";
import { getAllQueryAction } from "../../redux_firebase/query/queryAction";
import {
  Line,
  LineChart,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";
import RedeemIcon from "@mui/icons-material/Redeem";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import PeopleIcon from "@mui/icons-material/People";
const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};
function AdminDashboard() {
  const dispatch = useDispatch();
  // dispatch(getAllQueryAction());
  // dispatch(getAllUserAction());
  // dispatch(getAllOrderAction());
  const { usersList } = useSelector((state) => state.user);
  const { bouquetlist } = useSelector((state) => state.bouquet);
  const { admin } = useSelector((state) => state.admin);
  const { orderList } = useSelector((state) => state.order);
  const pendingList = orderList.filter((item) => item.status === "pending");
  const approvedList = orderList.filter((item) => item.status === "approved");
  const completedList = orderList.filter((item) => item.status === "collected");
  const { queryList } = useSelector((state) => state.query);

  const orderdata = [
    {
      name: "approved",
      value: approvedList.length,
      fill: "#82ca9d",
    },
    {
      name: "pending",
      value: pendingList.length,
      fill: "#a4de6c",
    },

    {
      name: "completed",
      value: completedList.length,
      fill: "#83a6ed",
    },
    {
      name: "Total orders",
      value: orderList.length,
      fill: "#8884d8",
    },
  ];

  const pricedata = bouquetlist.map((b) => ({ name: b.bname, price: b.price }));

  return (
    <AdminLayout>
      <Typography variant="h3" align="center" margin={"15px"}>
        Hello {admin.fname} {admin.lname}, Welocme to Dashboard
      </Typography>

      <Box
        margin={"20px"}
        display={"flex"}
        alignItems={"stretch"}
        gap={"10px"}
        sx={{
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { xs: "center", lg: "space-evenly" },
        }}
      >
        <Paper
          elevation={4}
          sx={{
            height: "auto",
            width: { md: "fit-content" },
            overflowX: "scroll",
            padding: "20px",
          }}
        >
          <LineChart
            width={700}
            height={300}
            data={pricedata}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Paper>
        <Paper
          elevation={4}
          sx={{
            width: { md: "fit-content" },
            padding: "10px",
            overflowX: { xs: "scroll" },
          }}
        >
          <Typography variant="h5" align="center">
            Orders Statistics
          </Typography>

          <RadialBarChart
            width={400}
            height={250}
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={15}
            data={orderdata}
          >
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#fff" }}
              background
              clockWise
              dataKey="value"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
          </RadialBarChart>
        </Paper>
      </Box>

      <Paper
        elevation={4}
        sx={{
          margin: "20px",
          padding: "10px",
          display: "flex",
          gap: "10px",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "10px",
        }}
      >
        <Paper elevation={3} className="tab">
          <PeopleIcon color="success" fontSize="large" />
          <Typography variant="overline">{usersList.length}</Typography>
          <Typography variant="button">Users</Typography>
        </Paper>
        <Paper elevation={3} className="tab">
          <RedeemIcon color="warning" fontSize="large" />
          <Typography variant="overline">{orderList.length}</Typography>
          <Typography variant="button">Orders</Typography>
        </Paper>
        <Paper elevation={3} className="tab">
          <LocalFloristIcon color="primary" fontSize="large" />
          <Typography variant="overline">{bouquetlist.length}</Typography>
          <Typography variant="button">Bouquets</Typography>
        </Paper>
        <Paper elevation={3} className="tab">
          <HelpCenterIcon color="error" fontSize="large" />
          <Typography variant="overline">{queryList.length}</Typography>
          <Typography variant="button">Queries</Typography>
        </Paper>
      </Paper>
    </AdminLayout>
  );
}

export default AdminDashboard;
