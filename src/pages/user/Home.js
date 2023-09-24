import React from "react";
import Footer from "../../components/layout/Footer";
import { useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import Card from "../../components/card/Card";
function Home() {
  const { bouquetlist } = useSelector((state) => state.bouquet);
  console.log(bouquetlist);
  return (
    <div>
      <Carousel>
        {bouquetlist.map((item) => (
          <img src={item.img} alt="bouquet" width={"100%"} height={"300px"} />
        ))}
      </Carousel>
      <Box>Home Login/Signout Products</Box>
      <Box>
        <Box>side option</Box>
        <Box>
          {bouquetlist.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
