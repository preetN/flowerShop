import React from "react";
import Footer from "../../components/layout/Footer";
import { useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { Box, ListItem, ListItemButton, List } from "@mui/material";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import pic from "../../asset/images/hanging.png";
import hanging2 from "../../asset/images/hanging2.png";
function Home() {
  const { user } = useSelector((state) => state.user);
  const { bouquetlist } = useSelector((state) => state.bouquet);
  console.log(bouquetlist);
  const handleOnNew = () => {
    alert("hi");
  };
  const handleOnPopular = () => {
    alert("hi");
  };
  const handleOnLow = () => {
    alert("hi");
  };
  const handleOnHigh = () => {
    alert("hi");
  };
  return (
    <div>
      {/* <Carousel>
        {bouquetlist.map((item) => (
          <img src={item.img} alt="bouquet" width={"100%"} height={"300px"} />
        ))}
      </Carousel> */}
      <div className="hero">
        <div className="pendulum" style={{ marginLeft: "50px" }}>
          <img alt="hanging " src={pic} height={"200px"} />
          <div>
            <img
              alt="hanging2"
              src={hanging2}
              height={"100px"}
              style={{ marginTop: 0 }}
            />
          </div>
        </div>
        <div className="welcome">
          <p>Welcome</p>
        </div>
        <div className="pendulum" style={{ marginRight: "50px" }}>
          <div>
            <img
              alt="hanging2"
              src={hanging2}
              height={"100px"}
              style={{ marginTop: 0 }}
            />
          </div>
          <img alt="hanging " src={pic} height={"200px"} />
        </div>
      </div>
      <div style={{ position: "sticky", top: "0" }}>
        <Header admin={user} />
      </div>

      <Box display={"flex"} margin={"20px"}>
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
          {bouquetlist.map((item, i) => (
            <Link
              to={`/bouquetdetails/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card key={i} {...item} />
            </Link>
          ))}
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
