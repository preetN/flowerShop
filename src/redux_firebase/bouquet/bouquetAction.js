import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../../config/FireBase";
import { setBouquetList, setBouquet } from "./bouquetSlice";
import { Store } from "react-notifications-component";
import { notification } from "../../components/notification/Notify";
export const getAllBouquetAction = () => async (dispatch) => {
  try {
    const bouquet = [];
    const querySnapshot = await getDocs(collection(db, "bouquet"));
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      bouquet.push({ ...data, id });
    });

    dispatch(setBouquetList(bouquet));
  } catch (e) {
    Store.addNotification({
      ...notification,
      title: "Fail",
      message: e.message,
      type: "warning",
    });
  }
};
export const deleteBouquetAction = (id) => async (dispatch) => {
  await deleteDoc(doc(db, "bouquet", id));
  dispatch(getAllBouquetAction());
  Store.addNotification({
    ...notification,
    title: "Success",
    message: "Bouquet deleted successfully",
    type: "warning",
  });
};
export const updateBouquetAction =
  ({ id, ...rest }) =>
  async (dispatch) => {
    const docRef = doc(db, "bouquet", id);
    await setDoc(docRef, rest, { merge: true });
    dispatch(getAllBouquetAction());
    Store.addNotification({
      ...notification,
      title: "Success",
      message: "Bouquet updated successfully",
      type: "warning",
    });
  };
export const getBouquetInfoAction = (id) => async (dispatch) => {
  try {
    const docRef = doc(db, "bouquet", id);
    const docSnap = await getDoc(docRef);
    var bouquet = {};
    if (docSnap.exists()) {
      bouquet = { ...docSnap.data(), id };
      dispatch(setBouquet(bouquet));
      console.log("From action: ", bouquet);
    } else {
      console.log("No such document");
    }
  } catch (e) {
    Store.addNotification({
      ...notification,
      title: "Fail",
      message: e.message,
      type: "warning",
    });
  }
};
export const addBouquetAction = (form) => {
  addDoc(collection(db, "bouquet"), form)
    .then(() => {
      Store.addNotification({
        ...notification,
        title: "Wonderful!",
        message: "Bouquet successfully added to the database",
        type: "success",
      });
      getAllBouquetAction();
    })
    .catch(() => console.log("Error"));
};
