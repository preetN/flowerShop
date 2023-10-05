import { Box, Stack, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import background from "../../../asset/images/background2.jpeg";
function BouquetDetails() {
  const { id } = useParams();
  console.log(id);
  const { bouquetlist } = useSelector((state) => state.bouquet);
  const [selectedBouquet, setSelectedBouquet] = useState({});
  useEffect(() => {
    const bouquet = bouquetlist.find((bouquet) => bouquet.id === id);
    setSelectedBouquet(bouquet);
  }, [bouquetlist, id]);
  console.log(selectedBouquet);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(white,pink,white)",
      }}
    >
      <Box display="flex" gap="20px" alignItems={"center"}>
        <Box>
          <img
            src={selectedBouquet.img}
            alt="bouquet"
            width="300px"
            height={"auto"}
          />
        </Box>
        <Box>
          <Typography variant="h4">{selectedBouquet.bname}</Typography>
          <Typography variant="p">{selectedBouquet.description}</Typography>
          <Typography variant="h6">Price: ${selectedBouquet.price}</Typography>
          <Button variant="outlined" color="secondary">
            Click to Order
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default BouquetDetails;
