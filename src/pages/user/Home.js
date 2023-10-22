import React from "react";
import Footer from "../../components/layout/Footer";
import { useDispatch } from "react-redux";
// import Carousel from "react-material-ui-carousel";
import pic from "../../asset/images/hanging.png";
import hanging2 from "../../asset/images/hanging2.png";
import Products from "./Products";
import { Box } from "@mui/material";
import { getAllAdminAction } from "../../redux_firebase/admin/adminAction";

function Home() {
  const dispatch = useDispatch();

  dispatch(getAllAdminAction());

  return (
    <div>
      {/* <Carousel>
        {bouquetlist.map((item) => (
          <img src={item.img} alt="bouquet" width={"100%"} height={"300px"} />
        ))}
      </Carousel> */}
      <Box className="hero" component={"div"}>
        <Box
          display={{ xs: "none", sm: "flex" }}
          component="div"
          className="pendulum"
          sx={{ marginLeft: "50px" }}
        >
          <img alt="hanging " src={pic} height={"200px"} />
          <div>
            <img
              alt="hanging2"
              src={hanging2}
              height={"100px"}
              style={{ marginTop: 0 }}
            />
          </div>
        </Box>
        <Box className="welcome">
          <p>Welcome</p>
        </Box>
        <Box
          display={{ xs: "none", sm: "flex" }}
          className="pendulum"
          component="div"
          sx={{ marginRight: "50px" }}
        >
          <div>
            <img
              alt="hanging2"
              src={hanging2}
              height={"100px"}
              style={{ marginTop: 0 }}
            />
          </div>
          <img alt="hanging " src={pic} height={"200px"} />
        </Box>
      </Box>
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
