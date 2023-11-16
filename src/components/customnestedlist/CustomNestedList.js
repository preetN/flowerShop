import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import {
  Box,
  Button,
  ListItem,
  Table,
  TableCell,
  TableHead,
  Typography,
  TableRow,
  TableBody,
} from "@mui/material";

export default function CustomNestedList({ item, handleOnCollect }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
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
            <Typography variant="h6">Order Details:</Typography>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              {item.orderDetails.map((i) => (
                <TableBody>
                  <TableCell>
                    <Typography variant="h5">{i.itemName}</Typography>
                  </TableCell>
                  <TableCell>
                    <img src={i.itemImg} width="200px" alt="bouquet" />
                  </TableCell>
                  <TableCell> $AU {i.itemPrice}</TableCell>
                  <TableCell>{i.itemQty}</TableCell>
                  <TableCell> $AU {i.itemPrice * i.itemQty}</TableCell>
                </TableBody>
              ))}
            </Table>

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
