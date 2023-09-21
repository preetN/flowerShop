import "./App.css";
import { Route, Routes } from "react-router";
import AdminLogin from "./pages/admin/auth/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Order from "./pages/admin/Order";
import Customers from "./pages/admin/Customers";
import AdminSignup from "./pages/admin/auth/AdminSignup";
import Home from "./pages/user/Home";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/FireBase";
import { getAdminAction } from "./pages/admin/redux_firebase/adminAction";
import Bouquet from "./pages/admin/bouquet/Bouquet";
import { red, green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";
import AddBouquet from "./pages/admin/bouquet/AddBouquet";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { useEffect } from "react";
import { getAllBouquetAction } from "./pages/admin/redux_firebase/bouquetAction";
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
    user?.uid && dispatch(getAdminAction(user.uid));
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
        <Route path="/admin-signup" element={<AdminSignup />} />

        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Order />
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

        <Route path="/*" element={<p>Url unavailable</p>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
