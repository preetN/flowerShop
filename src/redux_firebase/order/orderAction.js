import { db } from "../../config/FireBase";
import { collection, addDoc, getDocs } from "firebase/firestore";

import { Store } from "react-notifications-component";
import { notification } from "../../components/notification/Notify";
import { setOrderList } from "./orderSlice";
export const addOrderAction = (form) => (dispatch) => {
  addDoc(collection(db, "order"), form)
    .then(() => {
      Store.addNotification({
        ...notification,
        title: "Wonderful!",
        message:
          "Your request has been sent, you will be notified once your order is confirmed, please check your order page regularly.",
        type: "success",
        dismiss: {
          duration: 6000,
        },
      });
    })
    .catch(() => console.log("Error"));
  dispatch(getAllOrderAction());
};
export const getAllOrderAction = () => async (dispatch) => {
  const querySnapshot = await getDocs(collection(db, "order"));
  const orders = [];
  querySnapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    orders.push({ ...data, id });
  });
  dispatch(setOrderList(orders));
};
