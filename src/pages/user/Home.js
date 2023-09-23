import React from "react";
import Footer from "../../components/layout/Footer";
import { useSelector } from "react-redux";
function Home() {
  const { bouquetlist } = useSelector((state) => state.bouquet);
  console.log(bouquetlist);
  return (
    <div>
      {bouquetlist.map((item) => (
        <img src={item.img} alt="bouquet" />
      ))}
      <Footer />
    </div>
  );
}

export default Home;
