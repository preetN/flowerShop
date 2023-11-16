import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import QuantityPicker from "../../../components/qtyPicker/QuantityPicker";
import { addToCart } from "../../../redux_firebase/cart/cartSlice";
function BouquetDetails() {
  const [qty, setQty] = useState(1);
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const { bouquetlist } = useSelector((state) => state.bouquet);
  const [selectedBouquet, setSelectedBouquet] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const bouquet = bouquetlist.find((bouquet) => bouquet.id === id);
    setSelectedBouquet(bouquet);
  }, [bouquetlist, id]);

  const handleOnAddToCart = (orderobj) => {
    // const date = new Date();
    // const orderDate = `${date.getFullYear()}-${
    //   date.getMonth() + 1
    // }-${date.getDate()}`;
    // const orderobj = {
    //   userId: user.uid,
    //   userEmail: user.email,
    //   itemName: bname,
    //   itemPrice: price,
    //   itemImg: img,
    //   orderDate: orderDate,
    //   status: "pending",
    // };
    const cartItem = {
      itemName: orderobj.bname,
      itemId: orderobj.id,
      itemPrice: orderobj.price,
      itemImg: orderobj.img,
      itemQty: qty,
    };
    console.log(cartItem, user.uid);
    dispatch(addToCart(cartItem));
    console.log("checkRedux");
    navigate("/products");
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
        <Link to="/products">
          <CloseIcon style={{ fontSize: 60 }} color="secondary" />
        </Link>
      </div>

      <Box
        display="flex"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        gap="20px"
        alignItems={"center"}
      >
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
            <>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleOnAddToCart(selectedBouquet)}
              >
                Add To Cart
              </Button>
              <QuantityPicker qty={qty} setQty={setQty} />
            </>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button color="secondary" variant="outlined">
                SignIn to Add
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default BouquetDetails;
