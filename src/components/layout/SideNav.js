import { List, Box, ListItem, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function SideNav() {
  const pages = [
    {
      page: "Dashboard",
      icon: <DashboardIcon />,
      path: "/admin-dashboard",
    },
    {
      page: "Bouquet",
      icon: <LocalFloristIcon />,
      path: "/bouquet",
    },
    {
      page: "Customers",
      icon: <ContactPageIcon />,
      path: "/customers",
    },
    {
      page: "Orders",
      icon: <ShoppingBasketIcon />,
      path: "/orders",
    },
  ];
  return (
    <Box bgcolor="text.secondary">
      <List>
        {pages.map((page) => (
          <ListItem>
            <Link to={page.path} style={{ textDecoration: "none" }}>
              <Button>
                <ListItemIcon>{page.icon}</ListItemIcon>
                <ListItemText>{page.page}</ListItemText>
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SideNav;
