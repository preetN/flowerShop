import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
    <Box display="flex" gap="20px" alignItems={"center"}>
      <Box>
        <img src={selectedBouquet.img} />
      </Box>
      <Box>
        <Typography variant="h4">{selectedBouquet.bname}</Typography>
        <Typography variant="p">{selectedBouquet.description}</Typography>
        <Typography variant="h6">Price: ${selectedBouquet.price}</Typography>
      </Box>
    </Box>
  );
}

export default BouquetDetails;
