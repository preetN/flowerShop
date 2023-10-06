import React from "react";
import Footer from "../../components/layout/Footer";
import { useSelector } from "react-redux";
// import Carousel from "react-material-ui-carousel";
import pic from "../../asset/images/hanging.png";
import hanging2 from "../../asset/images/hanging2.png";
import Products from "./Products";
function Home() {
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
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
