import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { addOrderAction } from "../../../redux_firebase/order/orderAction";
function BouquetDetails() {
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const navigate = useNavigate();
  const { bouquetlist } = useSelector((state) => state.bouquet);
  const [selectedBouquet, setSelectedBouquet] = useState({});
  useEffect(() => {
    const bouquet = bouquetlist.find((bouquet) => bouquet.id === id);
    setSelectedBouquet(bouquet);
  }, [bouquetlist, id]);
  console.log(selectedBouquet);
  const handleOnOrder = ({ bname, price, img }) => {
    const date = new Date();
    const orderDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    const orderobj = {
      userId: user.uid,
      userEmail: user.email,
      itemName: bname,
      itemPrice: price,
      itemImg: img,
      orderDate: orderDate,
      status: "pending",
    };
    console.log(orderobj);
    addOrderAction(orderobj);
    navigate("/order");
  };
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
      <div style={{ position: "fixed", top: 50, left: 50 }}>
        <Link to="/">
          <CloseIcon style={{ fontSize: 60 }} color="secondary" />
        </Link>
      </div>

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
          {user?.uid ? (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleOnOrder(selectedBouquet)}
            >
              Click to Order
            </Button>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button color="secondary" variant="outlined">
                SignIn to Order
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default BouquetDetails;
