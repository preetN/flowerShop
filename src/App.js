import "./App.css";
import { Route, Routes } from "react-router";
import AdminLogin from "./pages/admin/auth/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Order from "./pages/admin/Order";
import Customers from "./pages/admin/Customers";
import AdminSignup from "./pages/admin/auth/AdminSignup";
import Home from "./pages/user/Home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </div>
  );
}

export default App;
