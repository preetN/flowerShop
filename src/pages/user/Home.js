import React, { useEffect, useState } from "react";
import Footer from "../../components/layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { Box, ListItem, ListItemButton, List } from "@mui/material";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import pic from "../../asset/images/hanging.png";
import hanging2 from "../../asset/images/hanging2.png";
import { signOut } from "firebase/auth";
import { auth } from "../../config/FireBase";
import { setUser } from "../../redux_firebase/user/userSlice";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { bouquetlist } = useSelector((state) => state.bouquet);
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

  const handleOnSignout = () => {
    signOut(auth).then(() => {
      dispatch(setUser({}));
    });

    navigate("/");
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
        <Header admin={user} handleOnSignout={handleOnSignout} />
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
      <Footer />
    </div>
  );
}

export default Home;
