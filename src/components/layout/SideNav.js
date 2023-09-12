import { List, Box, ListItem } from "@mui/material";
import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ContactPageIcon from "@mui/icons-material/ContactPage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function SideNav() {
  return (
    <Box sx={{ background: "neutral" }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocalFloristIcon />
          </ListItemIcon>
          <ListItemText>Bouquet</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ContactPageIcon />
          </ListItemIcon>
          <ListItemText> Customers</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText> Orders</ListItemText>
        </ListItem>
      </List>
    </Box>
  );
}

export default SideNav;
