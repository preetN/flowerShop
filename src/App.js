import "./App.css";
import { Route, Routes } from "react-router";
import Signup from "./components/admin/Signup";
import Login from "./components/admin/Login";
import AdminDashboard from "./components/admin/AdminDashboard";
import Order from "./components/admin/Order";
import Customers from "./components/admin/Customers";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </div>
  );
}

export default App;
