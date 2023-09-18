import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../config/FireBase";
import { setBouquet } from "./bouquetSlice";
import { Store } from "react-notifications-component";
import { notification } from "../../../components/notification/Notify";
export const getAllBouquetAction = () => async (dispatch) => {
  try {
    const bouquet = [];
    const querySnapshot = await getDocs(collection(db, "bouquet"));
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      bouquet.push({ ...data, id });
    });

    dispatch(setBouquet(bouquet));
  } catch (e) {
    Store.addNotification({
      ...notification,
      title: "Fail",
      message: e.message,
      type: "warning",
    });
  }
};
export const deleteBouquetAction = async (id) => {
  await deleteDoc(doc(db, "bouquet", id));
};
