import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import QuantityPicker from "../../../components/qtyPicker/QuantityPicker";
import { addToCart } from "../../../redux_firebase/cart/cartSlice";
import { Store } from "react-notifications-component";
import { notification } from "../../../components/notification/Notify";
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
  const Increment = (a) => {
    a++;
    setQty(a);
  };
  const Decrement = (a) => {
    a--;
    setQty(a);
  };
  const handleOnAddToCart = (cartobj) => {
    const cartItem = {
      itemName: cartobj.bname,
      itemId: cartobj.id,
      itemPrice: cartobj.price,
      itemImg: cartobj.img,
      itemQty: qty,
    };
    if (qty > 0) {
      dispatch(addToCart(cartItem));
      Store.addNotification({
        ...notification,
        title: "Added",
        message: "Added to Cart",
        type: "success",
      });
      navigate(-1);
    } else {
      Store.addNotification({
        ...notification,
        type: "warning",
        message: "can't add 0 items to cart",
        title: "Try again",
      });
    }
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
        <Button onClick={() => navigate(-1)}>
          <CloseIcon style={{ fontSize: 60 }} color="secondary" />
        </Button>
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
              <QuantityPicker
                qty={qty}
                setQty={setQty}
                Increment={Increment}
                Decrement={Decrement}
              />
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
