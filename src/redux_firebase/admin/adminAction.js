import { db } from "../../config/FireBase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { setAdmin, setAdminList } from "./adminSlice";
import { auth } from "../../config/FireBase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Store } from "react-notifications-component";
import { notification } from "../../components/notification/Notify";
export const loginAdmin = (form) => async (dispatch) => {
  signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch(getAdminAction(user.uid));
    })
    .catch((error) => {
      const errorMessage = error.message;
      Store.addNotification({
        ...notification,
        title: "Fail",
        message: errorMessage,
        type: "danger",
      });
    });
};
export const getAdminAction = (uid) => async (dispatch) => {
  const docRef = doc(db, "user", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists() && docSnap.data().type === "admin") {
    dispatch(setAdmin({ uid, ...docSnap.data() }));
    Store.addNotification({
      ...notification,
      title: "Success",
      message: "Login Successful",
      type: "success",
    });
  }
};
export const getAllAdminAction = () => async (dispatch) => {
  const alladminList = [];
  const querySnapshot = await getDocs(collection(db, "admin"));
  querySnapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    if (data.type === "admin") {
      alladminList.push({ ...data, id });
    }
  });

  dispatch(setAdminList(alladminList));
};
