import { db } from "../../config/FireBase";
import { collection, addDoc } from "firebase/firestore";

import { Store } from "react-notifications-component";
import { notification } from "../../components/notification/Notify";
export const addOrderAction = (form) => {
  addDoc(collection(db, "order"), form)
    .then(() => {
      Store.addNotification({
        ...notification,
        title: "Wonderful!",
        message: "Order Placed",
        type: "success",
      });
    })
    .catch(() => console.log("Error"));
};
