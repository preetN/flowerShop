import { db } from "../../config/FireBase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { setUser, setUsersList } from "./userSlice";

import { Store } from "react-notifications-component";
import { notification } from "../../components/notification/Notify";
import { getCartAction } from "../cart/cartAction";
export const getUserAction = (uid) => async (dispatch) => {
  const docRef = doc(db, "user", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    dispatch(setUser({ uid, ...docSnap.data() }));
  } else {
    console.log("No such document");
  }
};
export const getAllUserAction = () => async (dispatch) => {
  const querySnapshot = await getDocs(collection(db, "user"));
  const user = [];
  querySnapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    user.push({ ...data, id });
  });
  dispatch(setUsersList(user));
};
export const updateUserAction = (uid, form) => async (dispatch) => {
  const docRef = doc(db, "user", uid);
  await setDoc(docRef, { ...form }, { merge: true });
  dispatch(setUser({ uid, ...form }));

  Store.addNotification({
    ...notification,
    title: "Success",
    message: "Information updated successfully",
    type: "success",
  });
};
export const addItemToCart = (uid, form) => async (dispatch) => {
  await setDoc(doc(db, `user/${uid}/cart`, form.itemId), form)
    .then(() => {
      Store.addNotification({
        ...notification,
        title: "Wonderful!",
        message: "Item Added",
        type: "success",
      });
    })
    .catch(() => console.log("Error"));
  dispatch(getCartAction(uid));
};
