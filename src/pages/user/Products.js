import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { Box, ListItem, ListItemButton, List } from "@mui/material";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
function Products({ bouquetlist }) {
  const [displayList, setDisplayList] = useState([]);
  useEffect(() => {
    setDisplayList(bouquetlist);
  }, [bouquetlist]);
  const handleOnNew = () => {
    const newest = [...displayList].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    console.log(newest);
    setDisplayList(newest);
  };
  const handleOnPopular = () => {
    alert("hi");
  };
  const handleOnLow = () => {
    const lowestPrice = [...displayList].sort((a, b) => a.price - b.price);
    console.log(lowestPrice);
    setDisplayList(lowestPrice);
  };
  const handleOnHigh = () => {
    const highestPrice = [...displayList].sort((a, b) => b.price - a.price);
    console.log(highestPrice);
    setDisplayList(highestPrice);
  };
  return (
    <UserLayout>
      <Box display={"flex"} marginTop={"20px"}>
        <Box width={"300px"}>
          <List sx={{ color: "text.secondary" }}>
            <ListItem>
              <ListItemButton onClick={handleOnNew}>
                Newest first
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={handleOnPopular}>Popular</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={handleOnLow}>
                Low Price first
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={handleOnHigh}>
                Highest Price
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box
          display={"flex"}
          gap={"30px"}
          justifyContent={"space-evenly"}
          flexWrap={"wrap"}
        >
          {displayList.map((item, i) => (
            <Link
              to={`/bouquetdetails/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card key={i} {...item} />
            </Link>
          ))}
        </Box>
      </Box>
    </UserLayout>
  );
}

export default Products;
