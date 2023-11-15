import "./App.css";
import { Route, Routes } from "react-router";
import AdminLogin from "./pages/admin/auth/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrder from "./pages/admin/orders/AdminOrder";
import Customers from "./pages/admin/customers/Customers";
import AdminSignup from "./pages/admin/auth/AdminSignup";
import Home from "./pages/user/Home";
import Login from "./pages/user/auth/Login";
import Signup from "./pages/user/auth/Signup";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/FireBase";
import { getUserAction } from "./redux_firebase/user/userAction";
import Bouquet from "./pages/admin/bouquet/Bouquet";
import { red, green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";
import AddBouquet from "./pages/admin/bouquet/AddBouquet";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { useEffect } from "react";
import { getAllBouquetAction } from "./redux_firebase/bouquet/bouquetAction";
import BouquetDetails from "./pages/user/bouquet/BouquetDetails";
import Order from "./pages/user/order/Order";
import Products from "./pages/user/Products";
import Profile from "./pages/user/Profile";
import Contact from "./pages/user/Contact";
import CustomerQuery from "./pages/admin/customerquery/CustomerQuery";
import Cart from "./pages/user/cart/Cart";

function App() {
  const color_theme = createTheme({
    palette: {
      primary: {
        main: red[100],
      },
      secondary: {
        main: green[900],
      },
    },
  });
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    user?.uid && dispatch(getUserAction(user.uid));
  });
  useEffect(() => {
    dispatch(getAllBouquetAction());
  });
  return (
    <ThemeProvider theme={color_theme}>
      <ReactNotifications />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="bouquetdetails/:id" element={<BouquetDetails />} />
        <Route path="/order" element={<Order />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/admin-signup"
          element={
            <PrivateRoute>
              <AdminSignup />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-orders"
          element={
            <PrivateRoute>
              <AdminOrder />
            </PrivateRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <PrivateRoute>
              <Customers />
            </PrivateRoute>
          }
        />
        <Route
          path="/bouquet"
          element={
            <PrivateRoute>
              <Bouquet />
            </PrivateRoute>
          }
        />
        <Route
          path="/addbouquet"
          element={
            <PrivateRoute>
              <AddBouquet />
            </PrivateRoute>
          }
        />
        <Route
          path="/customerquery"
          element={
            <PrivateRoute>
              <CustomerQuery />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<p>Url unavailable</p>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
