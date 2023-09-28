import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBouquetInfoAction } from "../../../redux_firebase/bouquet/bouquetAction";

function BouquetDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  dispatch(getBouquetInfoAction(id));
  const { selectedBouquet } = useSelector((state) => state.bouquet);
  console.log(selectedBouquet);
  return (
    <Box>
      Hello
      <img src="" />
    </Box>
  );
}

export default BouquetDetails;
