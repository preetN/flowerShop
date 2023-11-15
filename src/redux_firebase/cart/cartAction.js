import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/FireBase";
import { setCart } from "./cartSlice";
export const getCartAction = (uid) => async (dispatch) => {
  const querySnapshot = await getDocs(collection(db, `user/${uid}/cart`));
  const cart = [];
  querySnapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    cart.push({ ...data, id });
  });
  console.log(cart);
  dispatch(setCart(cart));
};
