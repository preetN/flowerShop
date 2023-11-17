import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
        <ListItemIcon>
          <img src={i.itemImg} width="40px" alt="bouquet" />
        </ListItemIcon>
        <ListItemText>{i.itemName}</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemText>Price: ${i.itemPrice}</ListItemText>
          <ListItemText>Quantity: {i.itemQty}</ListItemText>
        </List>
      </Collapse>
    </List>
  );
}

export default SimpleNestedList;
