import {
  Badge,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import React, { useState } from "react";

function SimpleNestedList({ i }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <Badge badgeContent={i.itemQty} color="error">
          <ListItemIcon>
            <img src={i.itemImg} width="40px" alt="bouquet" />
          </ListItemIcon>
        </Badge>
        <ListItemText>
          <Typography fontSize={"smaller"}>{i.itemName}</Typography>
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemIcon>
            <img src={i.itemImg} width="100px" alt="bouquet" />
          </ListItemIcon>
          <ListItemText> Unit Price: ${i.itemPrice}</ListItemText>
          <ListItemText>Quantity: {i.itemQty}</ListItemText>
        </List>
      </Collapse>
    </List>
  );
}

export default SimpleNestedList;
