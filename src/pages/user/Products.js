import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useSelector } from "react-redux";
import CustomCard from "../../components/card/CustomCard";
function Products() {
  const [displayList, setDisplayList] = useState([]);
  const [sortby, setSortBy] = useState("");

  const { bouquetlist } = useSelector((state) => state.bouquet);
  useEffect(() => {
    setDisplayList(bouquetlist);
  }, [bouquetlist]);
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    if (e.target.value === "new") handleOnNew();
    else if (e.target.value === "high") handleOnHigh();
    else if (e.target.value === "low") handleOnLow();
  };
  const handleOnNew = () => {
    const newest = [...displayList].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    console.log("newest");
    setDisplayList(newest);
  };

  const handleOnLow = () => {
    const lowestPrice = [...displayList].sort((a, b) => a.price - b.price);
    console.log("lowestPrice");
    setDisplayList(lowestPrice);
  };
  const handleOnHigh = () => {
    const highestPrice = [...displayList].sort((a, b) => b.price - a.price);
    console.log("highestPrice");
    setDisplayList(highestPrice);
  };
  return (
    <UserLayout>
      <Container>
        <Box
          marginTop={"20px"}
          marginBottom={"20px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Box>
            <Box width={"200px"} height={"10"} sx={{ float: "right" }}>
              <FormControl variant="standard" size="small" fullWidth>
                <InputLabel id="sortby-label">Sort by</InputLabel>
                <Select
                  labelId="sortby-label"
                  label="Sort by"
                  value={sortby}
                  onChange={handleSortBy}
                >
                  <MenuItem value={"new"}>Newest first</MenuItem>
                  <MenuItem value={"low"}>Low Price first</MenuItem>
                  <MenuItem value={"high"}>Highest Price</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            display={"flex"}
            gap={"30px"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
          >
            {displayList?.map((item, i) => (
              <CustomCard key={i} {...item} />
            ))}
          </Box>
        </Box>
      </Container>
    </UserLayout>
  );
}

export default Products;
