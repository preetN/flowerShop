import { db } from "../../config/FireBase";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

import { Store } from "react-notifications-component";
import { notification } from "../../components/notification/Notify";
import { setCurrentUserOrderList, setOrderList } from "./orderSlice";
export const addOrderAction = (form) => {
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
export const approveOrderAction = (id) => async (dispatch) => {
  const orderRef = doc(db, "order", id);
  await setDoc(orderRef, { status: "approved" }, { merge: true });
  dispatch(getAllOrderAction());
  Store.addNotification({
    ...notification,
    title: "Success",
    message: "Order Approved",
    type: "warning",
  });
};
export const getUserOrderListAction = (email) => async (dispatch) => {
  const compare = email != null ? email : "";
  const q = query(collection(db, "order"), where("userEmail", "==", compare));
  const list = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();

    list.push({ ...data, id });
  });
  dispatch(setCurrentUserOrderList(list));
};
