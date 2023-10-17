import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Box, Button, ListItem, Typography } from "@mui/material";

export default function CustomNestedList({ item, handleOnCollect }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <img src={item.itemImg} width="40px" alt="bouquet" />
        </ListItemIcon>
        <ListItemText>Order Id: {item.id}</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.status === "pending" && (
            <ListItemText>
              <Typography variant="caption">
                Once your order is approved you can collect it
              </Typography>
            </ListItemText>
          )}
          <ListItemText>
            <Box
              component="div"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h4">{item.itemName}</Typography>
              <img src={item.itemImg} width="200px" alt="bouquet" />
              <Typography variant="p">$AU {item.itemPrice}</Typography>
            </Box>
            <Box component={"div"}>
              <Typography variant="h6">Order Information:</Typography>
              <List>
                <ListItem>
                  <Typography variant="overline">
                    Order Date:{item.orderDate}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="overline">Order Id:{item.id}</Typography>
                </ListItem>
                <ListItem>
                  {item.status === "approved" ? (
                    <>
                      <Typography variant="overline">
                        Order ready for collection
                      </Typography>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleOnCollect(item)}
                      >
                        Collect
                      </Button>
                    </>
                  ) : item.status === "collected" ? (
                    <Typography variant="overline">
                      Already Collected
                    </Typography>
                  ) : (
                    <Typography variant="overline">
                      Collection: Shop Front
                    </Typography>
                  )}
                </ListItem>
              </List>
            </Box>
          </ListItemText>
        </List>
      </Collapse>
    </>
  );
}
