import { db } from "../../config/FireBase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { setUser, setUsersList } from "./userSlice";
import { Store } from "react-notifications-component";
import { notification } from "../../components/notification/Notify";
export const getUserAction = (uid) => async (dispatch) => {
  const docRef = doc(db, "user", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    dispatch(setUser({ uid, ...docSnap.data() }));
    Store.addNotification({
      ...notification,
      title: "LogIn successful",
      message: "Welcome ",
      type: "success",
    });
  } else {
    Store.addNotification({
      ...notification,
      title: "LogIn unsuccessful",
      message: "Failed ",
      type: "danger",
    });
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
