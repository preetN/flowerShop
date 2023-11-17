import { db } from "../../config/FireBase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { setAdmin, setAdminList } from "./adminSlice";

import { Store } from "react-notifications-component";
import { notification } from "../../components/notification/Notify";
export const getAdminAction = (uid) => async (dispatch) => {
  const docRef = doc(db, "admin", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    dispatch(setAdmin({ uid, ...docSnap.data() }));
  } else {
    Store.addNotification({
      ...notification,
      title: "LogIn unsuccessful",
      message: "Failed ",
      type: "danger",
    });
  }
};
export const getAllAdminAction = () => async (dispatch) => {
  const alladminList = [];
  const querySnapshot = await getDocs(collection(db, "admin"));
  querySnapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    alladminList.push({ ...data, id });
  });

  dispatch(setAdminList(alladminList));
};
